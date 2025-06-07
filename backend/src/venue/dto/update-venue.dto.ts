import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVenueDto {
  @ApiProperty({ example: 'Binenso Halı Saha' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Spor' })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({ example: 'Ataköy Mah. 3. Sokak No:5' })
  @IsString()
  @IsOptional()
  address?: string;
}
