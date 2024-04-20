import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Reservation } from './entities/reservation.entity'
import { CreateReservationDto } from './dto/create-reservation.dto'

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.save(createReservationDto)
  }

  findAllReservations() {
    return this.reservationRepository.find()
  }

  async findOneReservation(id: string) {
    return this.reservationRepository.findOne({ where: { reservation_id: id } })
  }

  async updateReservation(
    id: string,
    updateReservationDto: CreateReservationDto,
  ) {
    await this.reservationRepository.update(id, updateReservationDto)
    return this.findOneReservation(id)
  }

  removeReservation(id: string) {
    return this.reservationRepository.delete(id)
  }
}
