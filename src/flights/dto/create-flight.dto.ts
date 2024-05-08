/*CREATE TABLE flights (
    flight_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    airline VARCHAR(50) NOT NULL,
    departure_airport VARCHAR(50) NOT NULL,
    arrival_airport VARCHAR(50) NOT NULL,
    departure_date TIMESTAMP NOT NULL,
    arrival_date TIMESTAMP NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);*/
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
