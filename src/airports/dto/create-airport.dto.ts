import { IsString, Length } from 'class-validator'

export class CreateAirportDto {
  @IsString()
  @Length(3, 10)
  airport_code: string

  @IsString()
  @Length(2, 100)
  city: string

  @IsString()
  @Length(2, 100)
  country: string
}
