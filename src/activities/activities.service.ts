import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { Activity } from './entities/activity.entity'
import { FindOneOptions } from 'typeorm'

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    const activity = this.activityRepository.create(createActivityDto)
    return this.activityRepository.save(activity)
  }

  findAll() {
    return this.activityRepository.find()
  }

  async findOne(id: string) {
    const options: FindOneOptions<Activity> = { where: { activity_id: id } }
    return this.activityRepository.findOne(options)
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    await this.activityRepository.update(id, updateActivityDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.activityRepository.delete(id)
    return { deleted: true }
  }
}
