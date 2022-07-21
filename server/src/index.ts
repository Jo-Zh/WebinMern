import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ItemsModel from "./models/Items";

const app: Express.Application = Express();
const port = 8000;

mongoose.connect("mongodb://localhost:27017/TradeItems");

app.use(cors());

app.post("/createItems", async (req, res) => {
  const item = req.body;
  const newItem = new ItemsModel(item);
  await newItem.save();
  res.json(newItem);
});

app.get("/getItems", (req, res) => {
  ItemsModel.find({}, (err: any, result: any) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at ${port}`);
});
