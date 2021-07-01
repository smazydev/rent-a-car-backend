import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RentedCarDocument = RentedCar & Document;

@Schema()
export class RentedCar {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  rentingPrice: number;
}

export const RentedCarSchema = SchemaFactory.createForClass(RentedCar);
