import { PartialType } from '@nestjs/swagger';
import { CreateVenueManagerDto } from './create-venue-manager.dto';

export class UpdateVenueManagerDto extends PartialType(CreateVenueManagerDto) {}
