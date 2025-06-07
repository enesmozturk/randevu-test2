import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueDto {
  @ApiProperty({ example: 'Binenso Halı Saha' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Spor' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 'Ataköy Mah. 3. Sokak No:5' })
  @IsString()
  @IsOptional()
  address?: string;
}
