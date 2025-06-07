import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: '5551112233' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  password: string;
}
