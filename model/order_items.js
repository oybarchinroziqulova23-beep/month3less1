import { Schema, model } from "mongoose";

const orderItemSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "order",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "water_product",
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const OrderItemModel = model("order_item", orderItemSchema);

export default OrderItemModel;
