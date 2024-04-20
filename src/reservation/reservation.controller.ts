import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common'
import { ReservationService } from './reservation.service'
import { CreateReservationDto } from './dto/create-reservation.dto'

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservation(createReservationDto)
  }

  @Get()
  findAllReservations() {
    return this.reservationService.findAllReservations()
  }

  @Get(':id')
  findOneReservation(@Param('id') id: string) {
    return this.reservationService.findOneReservation(id)
  }

  @Patch(':id')
  updateReservation(
    @Param('id') id: string,
    @Body() updateReservationDto: CreateReservationDto,
  ) {
    return this.reservationService.updateReservation(id, updateReservationDto)
  }

  @Delete(':id')
  removeReservation(@Param('id') id: string) {
    return this.reservationService.removeReservation(id)
  }
}
