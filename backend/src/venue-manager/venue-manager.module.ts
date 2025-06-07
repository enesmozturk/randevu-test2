import { Module } from '@nestjs/common';
import { VenueManagerService } from './venue-manager.service';
import { VenueManagerController } from './venue-manager.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VenueManagerController],
  providers: [VenueManagerService],
})
export class VenueManagerModule {}
