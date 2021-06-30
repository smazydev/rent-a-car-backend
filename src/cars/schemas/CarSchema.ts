import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  dailyPrice: number;

  @Prop()
  monthlyPrice: number;

  @Prop()
  gearType: string;

  @Prop()
  gas: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
