import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Room } from './entities/room.entity'
import { CreateRoomDto } from './dto/create-room.dto'

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto) {
    return this.roomRepository.save(createRoomDto)
  }

  findAllRooms() {
    return this.roomRepository.find()
  }

  async findOneRoom(id: string) {
    return this.roomRepository.findOne({ where: { room_id: id } })
  }

  async updateRoom(id: string, updateRoomDto: CreateRoomDto) {
    await this.roomRepository.update(id, updateRoomDto)
    return this.findOneRoom(id)
  }

  removeRoom(id: string) {
    return this.roomRepository.delete(id)
  }
}
