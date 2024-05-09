import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, ILike } from 'typeorm'
import { CreateHotelDto } from './dto/create-hotel.dto'
import { UpdateHotelDto } from './dto/update-hotel.dto'
import { Hotels } from './entities/hotel.entity'
import { FindOneOptions } from 'typeorm'

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotels)
    private readonly hotelRepository: Repository<Hotels>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    const hotel = this.hotelRepository.create(createHotelDto)
    return this.hotelRepository.save(hotel)
  }

  findAll() {
    return this.hotelRepository.find()
  }

  async findOne(id: string) {
    const options: FindOneOptions<Hotels> = { where: { hotel_id: id } }
    return this.hotelRepository.findOne(options)
  }

  async findByName(name: string): Promise<Hotels[]> {
    const normalizedSearchTerm = name.toLowerCase()
    return this.hotelRepository.find({
      where: {
        name: ILike(`%${normalizedSearchTerm}%`),
      },
    })
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    await this.hotelRepository.update(id, updateHotelDto)
    return this.findOne(id)
  }

  async remove(id: string) {
    await this.hotelRepository.delete(id)
    return { deleted: true }
  }
}
