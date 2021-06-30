import { Body, Controller, Get, Post } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsSerivce: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsSerivce.findAll();
  }

  @Post()
  async createCar(@Body() createCarDTO: CreateCarDTO): Promise<Car> {
    return this.carsSerivce.create(createCarDTO);
  }
}
