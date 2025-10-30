import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "order",
      required: true,
    },
    amount: { type: Number, required: true, min: 0 },
    payment_method: {
      type: String,
      enum: ["cash", "card", "online"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transaction_id: { type: String, trim: true },
  },
  { versionKey: false, timestamps: true }
);

const PaymentModel = model("payment", paymentSchema);

export default PaymentModel;
