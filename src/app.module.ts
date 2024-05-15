import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HotelModule } from './hotel/hotel.module'
import { Hotels } from './hotel/entities/hotel.entity'
import { RoomModule } from './room/room.module'
import { Room } from './room/entities/room.entity'
import { ReservationModule } from './reservation/reservation.module'
import { Reservation } from './reservation/entities/reservation.entity'
import { UserModule } from './user/user.module'
import { User } from './user/entities/user.entity'
import { FlightsModule } from './flights/flights.module'
import { Flight } from './flights/entities/flight.entity'
import { ActivitiesModule } from './activities/activities.module'
import { Activity } from './activities/entities/activity.entity'
import { CarsModule } from './cars/cars.module'
import { Car } from './cars/entities/car.entity'
import { AirportsModule } from './airports/airports.module'
import { Airport } from './airports/entities/airport.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('PGHOST'),
        database: configService.get<string>('PGDATABASE'),
        username: configService.get<string>('PGUSER'),
        password: configService.get<string>('PGPASSWORD'),
        schema: configService.get('DATABASE_SCHEMA'),
        port: 5432,
        ssl: true,
        connection: {
          options: `project=${configService.get<string>('ENDPOINT_ID')}`,
        },
        entities: [
          Hotels,
          Room,
          Reservation,
          User,
          Flight,
          Activity,
          Car,
          Airport,
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    HotelModule,
    RoomModule,
    ReservationModule,
    UserModule,
    FlightsModule,
    ActivitiesModule,
    CarsModule,
    AirportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
