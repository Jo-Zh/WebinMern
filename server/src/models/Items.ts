import mongoose from "mongoose";
import { Itemtype } from "../types/custom_server";

const ItemsSchema = new mongoose.Schema<Itemtype>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const ItemsModel: mongoose.Model<any> = mongoose.model("items", ItemsSchema);

export = ItemsModel;
