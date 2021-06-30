import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/CarSchema';
import { CreateCarDTO } from './create-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async create(createCarDTO: CreateCarDTO): Promise<Car> {
    const createdCar = new this.carModel(createCarDTO);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
}
