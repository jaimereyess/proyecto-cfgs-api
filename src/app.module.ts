import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HotelModule } from './hotel/hotel.module'
import { Hotels } from './hotel/entities/hotel.entity'

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
        entities: [Hotels],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    HotelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
