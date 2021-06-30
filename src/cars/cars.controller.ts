import { Controller, Get } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsSerivce: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsSerivce.findAll();
  }
}
