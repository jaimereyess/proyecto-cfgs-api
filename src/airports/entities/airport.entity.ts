import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'airports' })
export class Airport {
  @PrimaryGeneratedColumn()
  airports_id: string

  @Column({ unique: true })
  airport_code: string

  @Column()
  city: string

  @Column()
  country: string
}
