import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async refreshTokens(refreshToken: string) {
    // Refresh token doğrulaması ve yeni token oluşturma
    const tokenRecord = await this.prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    });

    if (!tokenRecord) return null;

    // Yeni access token üret
    const userId = tokenRecord.userId;
    const payload = { sub: userId };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const newRefreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // Refresh token’ı güncelle
    await this.prisma.refreshToken.update({
      where: { token: refreshToken },
      data: { 
        token: newRefreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 gün sonrası
      },
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  async validateUser(phone: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Telefon veya şifre yanlış');
    }
    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, phone: user.phone };
    const accessToken = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '15m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '7d',
    });

    // Refresh token'ı veritabanına kaydet
    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return { accessToken, refreshToken };
  }

  async register(data: { name: string; surname: string; phone: string; password: string; email: string }) {
    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        email: data.email,
        password: hash,
      },
    });
    return this.login(user);
  }

  async logout(refreshToken: string): Promise<boolean> {
    // Refresh token DB’den silinir
    const deleted = await this.prisma.refreshToken.deleteMany({
      where: { token: refreshToken },
    });

    return deleted.count > 0;
  }
}
