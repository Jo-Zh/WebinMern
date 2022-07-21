import { Document } from "mongoose";

export interface Itemtype extends Document {
  title: string;
  slug: string;
  price: number;
  category: string;
  date?: Date;
}
