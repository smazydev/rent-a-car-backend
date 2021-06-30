import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car, CarSchema } from './schemas/CarSchema';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {
  constructor(private configService: ConfigService) {}
}
