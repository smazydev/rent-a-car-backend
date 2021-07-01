import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { rented } from './interfaces/rented.interface';
import { RentedCar, RentedCarDocument } from './schemas/RentedCarSchema';
import { CreateRentedDTO } from './create-rented.dto';

@Injectable()
export class RentedService {
  constructor(
    @InjectModel(RentedCar.name)
    private rentedCarModel: Model<RentedCarDocument>,
  ) {}
  
  async create(createRentedDTO: CreateRentedDTO): Promise<RentedCar> {
    const createdRentedCar = new this.rentedCarModel(createRentedDTO);
    return createdRentedCar.save();
  }

  async findAll(): Promise<rented[]> {
    return this.rentedCarModel.find().exec();
  }
}
