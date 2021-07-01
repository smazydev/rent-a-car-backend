import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RentedController } from './rented.controller';
import { RentedService } from './rented.service';
import { RentedCar, RentedCarSchema } from './schemas/RentedCarSchema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: RentedCar.name, schema: RentedCarSchema },
    ]),
  ],
  controllers: [RentedController],
  providers: [RentedService],
})
export class RentedModule {}
