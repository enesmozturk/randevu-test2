import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueManagerService } from './venue-manager.service';
import { CreateVenueManagerDto } from './dto/create-venue-manager.dto';
import { UpdateVenueManagerDto } from './dto/update-venue-manager.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('VenueManagers')
@Controller('venue-managers')
export class VenueManagerController {
  constructor(private readonly service: VenueManagerService) {}

  @Post()
  @ApiOperation({ summary: 'Yeni bir venue yöneticisi ata' })
  create(@Body() dto: CreateVenueManagerDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Tüm venue yöneticilerini getir' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Tek bir venue yöneticisini getir' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Venue yöneticisini güncelle' })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() dto: UpdateVenueManagerDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Venue yöneticisini sil' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
