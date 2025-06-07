import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { VenueModule } from './venue/venue.module';
import { ConfigModule } from '@nestjs/config';
import { VenueManagerModule } from './venue-manager/venue-manager.module';
import { UsersModule } from './user/users.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule, VenueModule, VenueManagerModule, UsersModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
