import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueManagerDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  venueId: string;
}
