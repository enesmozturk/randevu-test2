import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Request } from 'express';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common';

@ApiTags('Users')
@ApiBearerAuth() // Swagger'da Bearer token kullanımı için
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Giriş yapan kullanıcının bilgilerini getirir.' })
  async getMe(@Req() req) {
    const userId = req.user?.userId;
    if (!userId) throw new UnauthorizedException('User not found');
    return this.usersService.getUserById(userId);
  }
}
