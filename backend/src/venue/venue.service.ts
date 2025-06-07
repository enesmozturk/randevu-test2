import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';


@Injectable()
export class VenueService {
  constructor(private prisma: PrismaService) {}

  async createVenue(ownerId: string, dto: CreateVenueDto) {
      if (!ownerId) {
    throw new Error('ownerId is required');
  }

    return this.prisma.venue.create({
      data: {
        name: dto.name,
        type: dto.type,
        address: dto.address,
        ownerId: ownerId,  // burada ownerId kesin olmalı
      },
    });
  }

  async getVenueById(id: string) {
    const venue = await this.prisma.venue.findUnique({
      where: { id },
      include: { rules: true, managers: true, units: true },
    });

    if (!venue) throw new NotFoundException('Venue not found');
    return venue;
  }

  async updateVenue(id: string, dto: UpdateVenueDto) {
    return this.prisma.venue.update({
      where: { id },
      data: dto,
    });
  }

  async deleteVenue(id: string) {
    return this.prisma.venue.delete({
      where: { id },
    });
  }

  async getMyVenues(ownerId: string) {
    return this.prisma.venue.findMany({
      where: { ownerId },
    });
  }
}
