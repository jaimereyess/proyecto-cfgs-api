import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  ArrayNotEmpty,
  IsBoolean,
  IsInt,
  Min,
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
  stars: number
}
