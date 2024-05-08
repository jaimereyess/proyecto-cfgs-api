import { IsNotEmpty, IsString, MaxLength, IsInt, Min } from 'class-validator'

export class CreateFlightDto {
  @IsString()
  @MaxLength(50, { message: 'Airline name is too long' })
  @IsNotEmpty()
  airline: string

  @IsString()
  @MaxLength(50, { message: 'Departure airport is too long' })
  @IsNotEmpty()
  departure_airport: string

  @IsString()
  @MaxLength(50, { message: 'Arrival airport is too long' })
  @IsNotEmpty()
  arrival_airport: string

  @IsString()
  @IsNotEmpty()
  departure_date: string

  @IsString()
  @IsNotEmpty()
  arrival_date: string

  @IsInt()
  @Min(1, { message: 'Price must be at least 1' })
  price: number
}
