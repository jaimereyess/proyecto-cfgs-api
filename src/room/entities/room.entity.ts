// room.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Hotels } from 'src/hotel/entities/hotel.entity'

@Entity({ name: 'rooms' })
export class Room {
  @PrimaryGeneratedColumn('uuid')
  room_id: string

  @ManyToOne(() => Hotels, (hotel) => hotel.rooms, { nullable: false })
  hotel: Hotels

  @Column()
  quantity: number

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
