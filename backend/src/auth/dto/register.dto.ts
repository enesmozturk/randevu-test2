import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Ahmet' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Yılmaz' })
  @IsNotEmpty()
  surname: string;

  @ApiProperty({ example: '5551112233' })
  @IsPhoneNumber('TR')
  phone: string;

  @ApiProperty({ example: 'ahmet@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'gizliSifre123' })
  @MinLength(6)
  password: string;
}
