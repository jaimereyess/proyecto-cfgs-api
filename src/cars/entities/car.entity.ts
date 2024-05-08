import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn()
  car_id: string

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  year: number

  @Column()
  price: number

  @Column()
  description: string

  @Column('simple-array')
  images: string[]

  @Column()
  has_air_conditioning: boolean

  @Column()
  has_gps: boolean

  @Column()
  has_automatic_transmission: boolean
}
