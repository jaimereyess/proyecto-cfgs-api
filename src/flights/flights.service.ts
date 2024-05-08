import { Injectable } from '@nestjs/common'
import { CreateFlightDto } from './dto/create-flight.dto'
import { UpdateFlightDto } from './dto/update-flight.dto'
import { Flight } from './entities/flight.entity'
import { FindOneOptions, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async create(createFlightDto: CreateFlightDto) {
    const flight = this.flightRepository.create(createFlightDto)
    return this.flightRepository.save(flight)
  }

  findAll() {
    return this.flightRepository.find()
  }

  async findOne(id: number) {
    const oprions: FindOneOptions<Flight> = { where: { flight_id: id } }
    return this.flightRepository.findOne(oprions)
  }

  async update(id: number, updateFlightDto: UpdateFlightDto) {
    await this.flightRepository.update(id, updateFlightDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.flightRepository.delete(id)
    return { deleted: true }
  }
}
