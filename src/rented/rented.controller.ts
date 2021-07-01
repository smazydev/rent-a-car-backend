import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRentedDTO } from './create-rented.dto';
import { rented } from './interfaces/rented.interface';
import { RentedService } from './rented.service';
import { RentedCar } from './schemas/RentedCarSchema';

@Controller('rented')
export class RentedController {
  constructor(private readonly rentedService: RentedService) {}
  @Get()
  async findAll(): Promise<rented[]> {
    return this.rentedService.findAll();
  }

  @Post()
  async create(@Body() CreateRentedDTO: CreateRentedDTO): Promise<RentedCar> {
    return this.rentedService.create(CreateRentedDTO);
  }
}
