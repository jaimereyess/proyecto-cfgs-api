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
    const options = { where: { room_id: id } }
    return this.roomRepository.findOne(options)
  }

  async findRoomsByHotel(hotelId: string) {
    const options = { where: { hotel_id: hotelId } }
    return this.roomRepository.find(options)
  }

  async updateRoom(id: string, updateRoomDto: CreateRoomDto) {
    await this.roomRepository.update(id, updateRoomDto)
    return this.findOneRoom(id)
  }

  removeRoom(id: string) {
    return this.roomRepository.delete(id)
  }
}
