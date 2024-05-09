import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  ArrayNotEmpty,
  IsBoolean,
  IsInt,
  Min,
  IsDecimal,
  Max,
} from 'class-validator'

export class CreateHotelDto {
  @IsString()
  @MaxLength(100, { message: 'Hotel name is too long' })
  @IsNotEmpty()
  name: string

  @IsString()
  @MaxLength(100, { message: 'Location is too long' })
  @IsNotEmpty()
  location: string

  @IsString()
  @MaxLength(100, { message: 'Description is too long' })
  @IsNotEmpty()
  description: string

  @IsArray()
  @ArrayNotEmpty({ message: 'Images must not be empty' })
  images: string[]

  @IsBoolean()
  breakfast_included: boolean

  @IsInt()
  @Min(1, { message: 'Stars must be at least 1' })
  @Max(5, { message: 'Stars must be at most 5' })
  stars: number

  @IsDecimal(
    { decimal_digits: '1', force_decimal: false },
    { message: 'Rating must have exactly one decimal' },
  )
  @Min(0, { message: 'Rating must be at least 1' })
  @Max(10, { message: 'Rating must be at most 10' })
  rating: number
}
