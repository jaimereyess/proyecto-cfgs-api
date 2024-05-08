import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'activities' })
export class Activity {
  @PrimaryGeneratedColumn()
  activity_id: string

  @Column()
  name: string

  @Column()
  location: string

  @Column()
  country: string

  @Column()
  description: string

  @Column('simple-array')
  images: string[]

  @Column('decimal', { precision: 10, scale: 2 })
  price: number
}
