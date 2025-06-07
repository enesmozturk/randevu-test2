import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueManagerDto } from './dto/create-venue-manager.dto';
import { UpdateVenueManagerDto } from './dto/update-venue-manager.dto';

@Injectable()
export class VenueManagerService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateVenueManagerDto) {
    return this.prisma.venueManager.create({ data: dto });
  }

  findAll() {
    return this.prisma.venueManager.findMany({
      include: { user: true, venue: true },
    });
  }

  findOne(id: string) {
    return this.prisma.venueManager.findUnique({
      where: { id },
      include: { user: true, venue: true },
    });
  }

  async update(id: string, dto: UpdateVenueManagerDto) {
    await this.findOne(id); // kontrol
    return this.prisma.venueManager.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // kontrol
    return this.prisma.venueManager.delete({ where: { id } });
  }
}
