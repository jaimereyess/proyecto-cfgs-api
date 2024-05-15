import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { AirportsService } from './airports.service'
import { CreateAirportDto } from './dto/create-airport.dto'
import { Airport } from './entities/airport.entity'

@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  create(@Body() createAirportDto: CreateAirportDto): Promise<Airport> {
    return this.airportsService.create(createAirportDto)
  }

  @Get()
  findAll(): Promise<Airport[]> {
    return this.airportsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Airport | null> {
    return this.airportsService.findOne(id)
  }

  @Get('/country/:country')
  findByCountry(@Param('country') country: string): Promise<Airport[]> {
    return this.airportsService.findByCountry(country)
  }

  @Get('/city/:city')
  findByCity(@Param('city') city: string): Promise<Airport[]> {
    return this.airportsService.findByCity(city)
  }

  @Get('/code/:code')
  findByCode(@Param('code') code: string): Promise<Airport | null> {
    return this.airportsService.findByCode(code)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.airportsService.remove(id)
  }
}
