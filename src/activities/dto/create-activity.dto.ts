import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  ArrayNotEmpty,
  IsInt,
  Min,
} from 'class-validator'

export class CreateActivityDto {
  @IsString()
  @MaxLength(100, { message: 'Activity name is too long' })
  @IsNotEmpty()
  name: string

  @IsString()
  @MaxLength(100, { message: 'Location is too long' })
  @IsNotEmpty()
  location: string

  @IsString()
  @MaxLength(100, { message: 'Country is too long' })
  @IsNotEmpty()
  country: string

  @IsString()
  description: string

  @IsArray()
  @ArrayNotEmpty({ message: 'Images must not be empty' })
  images: string[]

  @IsInt()
  @Min(0, { message: 'Price must be at least 0' })
  price: number
}
