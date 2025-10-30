import { Schema, model } from "mongoose";

const waterProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    volume_liters: { type: Number, required: true }, 
    price: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true }, 
  },
  { versionKey: false, timestamps: true }
);

const WaterProductModel = model("water_product", waterProductSchema);

export default WaterProductModel;
