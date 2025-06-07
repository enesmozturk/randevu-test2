import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Venues') // Swagger'da grup ismi
@ApiBearerAuth()   // Bearer token tanımı
@UseGuards(JwtAuthGuard)
@Controller('venues')
export class VenueController {
  constructor(private venueService: VenueService) {}

  @Post()
  @ApiOperation({ summary: 'Yeni bir toplu alan (venue) oluşturur.' })
  @ApiBody({ type: CreateVenueDto })
  createVenue(@Body() dto: CreateVenueDto, @Req() req: Request) {
    const user = req.user as any;
    return this.venueService.createVenue(user.id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Giriş yapan kullanıcının sahip olduğu tüm toplu alanları getirir.' })
  getMyVenues(@Req() req: Request) {
    const user = req.user as any;
    return this.venueService.getMyVenues(user.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Belirli bir venue bilgisini ID ile getirir.' })
  @ApiParam({ name: 'id', description: 'Venue ID' })
  getVenue(@Param('id') id: string) {
    return this.venueService.getVenueById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Bir venue kaydını günceller.' })
  @ApiParam({ name: 'id', description: 'Venue ID' })
  @ApiBody({ type: UpdateVenueDto })
  updateVenue(@Param('id') id: string, @Body() dto: UpdateVenueDto) {
    return this.venueService.updateVenue(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Bir venue kaydını siler.' })
  @ApiParam({ name: 'id', description: 'Venue ID' })
  deleteVenue(@Param('id') id: string) {
    return this.venueService.deleteVenue(id);
  }
}
