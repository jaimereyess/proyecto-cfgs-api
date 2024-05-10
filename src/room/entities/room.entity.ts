import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { Hotels } from 'src/hotel/entities/hotel.entity'
import { Reservation } from 'src/reservation/entities/reservation.entity'

/*
@IsNumber()
  @IsNotEmpty()
  free_quantity: number

  @IsNumber()
  @IsNotEmpty()
  max_guests: number
*/
@Entity({ name: 'rooms' })
export class Room {
  @PrimaryGeneratedColumn('uuid')
  room_id: string

  @ManyToOne(() => Hotels, (hotel) => hotel.rooms)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotels

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[]

  @Column()
  quantity: number

  @Column()
  free_quantity: number

  @Column()
  max_guests: number

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number

  @Column({ nullable: true })
  description: string

  @Column({ default: false })
  has_air_conditioning: boolean

  @Column({ default: false })
  has_terrace: boolean

  @Column({ default: false })
  has_tv: boolean

  @Column({ default: false })
  has_wifi: boolean
}
