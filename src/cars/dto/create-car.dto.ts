import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  IsBoolean,
  IsInt,
  Min,
} from 'class-validator'

export class CreateCarDto {
  @IsString()
  @MaxLength(50, { message: 'Brand is too long' })
  @IsNotEmpty()
  brand: string

  @IsString()
  @MaxLength(50, { message: 'Model is too long' })
  @IsNotEmpty()
  model: string

  @IsInt()
  @Min(1900, { message: 'Year must be at least 1900' })
  year: number

  @IsInt()
  @Min(1, { message: 'Price must be at least 1' })
  price: number

  @IsString()
  description: string

  @IsArray()
  images: string[]

  @IsBoolean()
  has_air_conditioning: boolean

  @IsBoolean()
  has_gps: boolean

  @IsBoolean()
  has_automatic_transmission: boolean
}
