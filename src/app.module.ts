import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CarsController } from './cars/cars.controller';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://smazy1437:${process.env.DB_PASS}@cluster0.d59hr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {}
