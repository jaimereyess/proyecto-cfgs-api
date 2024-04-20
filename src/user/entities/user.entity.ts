import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Reservation } from 'src/reservation/entities/reservation.entity'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string

  @Column({ unique: true, length: 50 })
  username: string

  @Column({ unique: true, length: 100 })
  email: string

  @Column({ length: 100 })
  password: string

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[]
}
