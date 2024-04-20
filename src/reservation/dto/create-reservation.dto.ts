import { IsNotEmpty, IsDateString, IsDecimal, IsIn } from 'class-validator'

export class CreateReservationDto {
  @IsNotEmpty()
  user_id: string

  @IsNotEmpty()
  room_id: string

  @IsDateString()
  check_in_date: Date

  @IsDateString()
  check_out_date: Date

  @IsDecimal()
  @IsNotEmpty()
  total_price: number

  @IsNotEmpty()
  @IsIn(['pending', 'confirmed', 'cancelled'])
  status: string
}
