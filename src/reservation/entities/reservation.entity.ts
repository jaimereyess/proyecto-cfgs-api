// reservation.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { User } from 'src/user/entities/user.entity' // Asegúrate de que esta importación sea correcta
import { Room } from 'src/room/entities/room.entity' // Asegúrate de que esta importación sea correcta

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  reservation_id: string

  @ManyToOne(() => User, (user) => user.reservations, { nullable: false })
  @JoinColumn({ name: 'user_id' }) // Especifica el nombre de la columna en la tabla
  user: User

  @ManyToOne(() => Room, (room) => room.reservations, { nullable: false })
  @JoinColumn({ name: 'room_id' }) // Especifica el nombre de la columna en la tabla
  room: Room

  @Column({ type: 'date' })
  check_in_date: Date

  @Column({ type: 'date' })
  check_out_date: Date

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_price: number

  @Column({ default: 'pending', length: 20 })
  status: string
}
