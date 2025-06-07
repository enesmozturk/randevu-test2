import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: '5551112233' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'gizliSifre123' })
  @IsNotEmpty()
  password: string;
}
