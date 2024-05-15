import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Airport } from './entities/airport.entity'
import { CreateAirportDto } from './dto/create-airport.dto'

@Injectable()
export class AirportsService {
  constructor(
    @InjectRepository(Airport)
    private airportsRepository: Repository<Airport>,
  ) {}

  create(createAirportDto: CreateAirportDto): Promise<Airport> {
    const airport = this.airportsRepository.create(createAirportDto)
    return this.airportsRepository.save(airport)
  }

  findAll(): Promise<Airport[]> {
    return this.airportsRepository.find()
  }

  findOne(airports_id: string): Promise<Airport | null> {
    return this.airportsRepository.findOneBy({ airports_id })
  }

  findByCountry(country: string): Promise<Airport[]> {
    return this.airportsRepository
      .createQueryBuilder('airport')
      .where('LOWER(airport.country) = LOWER(:country)', { country })
      .getMany()
  }

  findByCity(city: string): Promise<Airport[]> {
    return this.airportsRepository
      .createQueryBuilder('airport')
      .where('LOWER(airport.city) = LOWER(:city)', { city })
      .getMany()
  }

  findByCode(airport_code: string): Promise<Airport | null> {
    return this.airportsRepository
      .createQueryBuilder('airport')
      .where('LOWER(airport.airport_code) = LOWER(:airport_code)', {
        airport_code,
      })
      .getOne()
  }

  async remove(id: number): Promise<void> {
    await this.airportsRepository.delete(id)
  }
}
