import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HotelModule } from './hotel/hotel.module'
import { Hotels } from './hotel/entities/hotel.entity'
import { RoomModule } from './room/room.module'
import { Room } from './room/entities/room.entity'

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
        entities: [Hotels, Room],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    HotelModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
