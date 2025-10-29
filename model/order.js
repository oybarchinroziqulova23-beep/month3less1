import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "address",
      required: true,
    },
    delivery_staff_id: {
      type: Schema.Types.ObjectId,
      ref: "deliveryStaff",
      required: true,
    },
    payment_id: {
      type: Schema.Types.ObjectId,
      ref: "payment",
    },
    status: {
      type: String,
      enum: ["pending", "on_delivery", "delivered", "cancelled"],
      default: "pending",
    },
    total_amount: { type: Number, required: true, min: 0 },
    delivery_date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

const OrderModel = model("order", orderSchema);

export default OrderModel;
