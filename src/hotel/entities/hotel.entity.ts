import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Room } from 'src/room/entities/room.entity'
@Entity()
export class Hotels {
  @PrimaryGeneratedColumn('uuid')
  hotel_id: string

  @Column({ length: 100 })
  name: string

  @Column({ length: 100 })
  location: string

  @Column({ length: 1000 })
  description: string

  @Column('simple-array')
  images: string[]

  @Column()
  breakfast_included: boolean

  @Column()
  stars: number

  @Column('decimal', { precision: 2, scale: 2 }) //
  rating: number

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[]
}
