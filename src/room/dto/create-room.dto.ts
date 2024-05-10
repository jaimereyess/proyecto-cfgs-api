import { IsNotEmpty, IsNumber, IsDecimal, IsBoolean } from 'class-validator'

export class CreateRoomDto {
  @IsNotEmpty()
  hotel_id: string

  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsNumber()
  @IsNotEmpty()
  free_quantity: number

  @IsNumber()
  @IsNotEmpty()
  max_guests: number

  @IsDecimal()
  @IsNotEmpty()
  price: number

  description: string

  @IsBoolean()
  has_air_conditioning: boolean

  @IsBoolean()
  has_terrace: boolean

  @IsBoolean()
  has_tv: boolean

  @IsBoolean()
  has_wifi: boolean
}
