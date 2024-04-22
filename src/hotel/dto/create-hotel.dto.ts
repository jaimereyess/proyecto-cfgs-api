import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  ArrayNotEmpty,
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
  @ArrayNotEmpty({ message: 'Amenities must not be empty' })
  images: string[]
}
