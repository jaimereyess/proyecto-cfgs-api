import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AirportsService } from './airports.service'
import { AirportsController } from './airports.controller'
import { Airport } from './entities/airport.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Airport])],
  providers: [AirportsService],
  controllers: [AirportsController],
})
export class AirportsModule {}
