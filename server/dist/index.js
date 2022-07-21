"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Items_1 = __importDefault(require("./models/Items"));
const app = (0, express_1.default)();
const port = 8000;
mongoose_1.default.connect("mongodb://localhost:27017/TradeItems");
app.use((0, cors_1.default)());
app.post("/createItems", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = req.body;
    const newItem = new Items_1.default(item);
    yield newItem.save();
    res.json(newItem);
}));
app.get("/getItems", (req, res) => {
    Items_1.default.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at ${port}`);
});
