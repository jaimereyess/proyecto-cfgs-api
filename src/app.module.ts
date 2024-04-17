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
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT') || '5432'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Hotels],
        synchronize: false,
        schema: configService.get('DATABASE_SCHEMA'),
      }),
      inject: [ConfigService],
    }),
    HotelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
