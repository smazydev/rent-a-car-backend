import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RentedController } from './rented/rented.controller';
import { RentedService } from './rented/rented.service';
import { RentedModule } from './rented/rented.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CarsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_URI'),
      }),
      inject: [ConfigService],
    }),
    RentedModule,
  ],
  providers:[],
  controllers:[]
})
export class AppModule {}
