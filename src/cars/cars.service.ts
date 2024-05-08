import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto'
import { Car } from './entities/car.entity'
import { FindOneOptions } from 'typeorm'

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto)
    return this.carRepository.save(car)
  }

  findAll() {
    return this.carRepository.find()
  }

  findOne(id: string) {
    const options: FindOneOptions<Car> = { where: { car_id: id } }
    return this.carRepository.findOne(options)
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    await this.carRepository.update(id, updateCarDto)
    return this.findOne(id)
  }

  async remove(id: string) {
    await this.carRepository.delete(id)
    return { deleted: true }
  }
}
