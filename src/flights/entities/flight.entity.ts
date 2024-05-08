import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({ name: 'flights' })
export class Flight {
  @PrimaryColumn()
  flight_id: string

  @Column({ length: 50 })
  airline: string

  @Column({ length: 50 })
  departure_airport: string

  @Column({ length: 50 })
  arrival_airport: string

  @Column()
  departure_date: string

  @Column()
  arrival_date: string

  @Column()
  price: number
}
