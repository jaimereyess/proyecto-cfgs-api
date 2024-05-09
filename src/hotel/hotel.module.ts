import { Module } from '@nestjs/common'
import { HotelService } from './hotel.service'
import { HotelController } from './hotel.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Hotels } from './entities/hotel.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Hotels])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
