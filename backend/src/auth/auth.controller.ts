import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('refresh')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    const tokens = await this.authService.refreshTokens(refreshToken);
    if (!tokens) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return tokens; // { accessToken: string, refreshToken: string }
  }

  @Post('register')
  @ApiOperation({ summary: 'Yeni kullanıcı kaydı oluşturur.' })
  @ApiBody({ type: RegisterDto })
  async register(@Body() dto: { name: string; surname: string; phone: string; email: string; password: string }) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Kullanıcı giriş işlemi yapar ve JWT token döner.' })
  @ApiBody({ type: LoginDto })
  async login(@Body() dto: { phone: string; password: string }) {
    const user = await this.authService.validateUser(dto.phone, dto.password);
    return this.authService.login(user);
  }

  @Post('logout')
  async logout(@Body('refreshToken') refreshToken: string) {
    const result = await this.authService.logout(refreshToken);
    if (!result) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return { message: 'Logged out successfully' };
  }
}
