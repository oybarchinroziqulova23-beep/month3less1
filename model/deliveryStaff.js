import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const deliveryStaffSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    vehicle_number: { type: String, required: true },
    district_id: {
      type: Schema.Types.ObjectId,
      ref: 'district',
      required: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {type: String,  enum: ['staff'],  default: 'staff'}
  },
  { versionKey: false, timestamps: true },
);

export default deliveryStaffSchema;