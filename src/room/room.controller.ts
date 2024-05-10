// room.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common'
import { RoomService } from './room.service'
import { CreateRoomDto } from './dto/create-room.dto'

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto)
  }

  @Get()
  findAllRooms() {
    return this.roomService.findAllRooms()
  }

  @Get(':id')
  findOneRoom(@Param('id') id: string) {
    return this.roomService.findOneRoom(id)
  }

  @Get('hotel/:hotelId')
  findRoomsByHotel(@Param('hotelId') hotelId: string) {
    return this.roomService.findRoomsByHotel(hotelId)
  }

  @Patch(':id')
  updateRoom(@Param('id') id: string, @Body() updateRoomDto: CreateRoomDto) {
    return this.roomService.updateRoom(id, updateRoomDto)
  }

  @Delete(':id')
  removeRoom(@Param('id') id: string) {
    return this.roomService.removeRoom(id)
  }
}
