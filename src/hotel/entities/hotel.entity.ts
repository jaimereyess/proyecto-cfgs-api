import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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
}
