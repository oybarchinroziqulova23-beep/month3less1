import { Schema, model } from 'mongoose';

const addressSchema = new Schema(
  {
    street: { type: String, required: true, trim: true },
    house_number: { type: String, required: true },
    landmark: { type: String, trim: true }, 
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: 'customer',
      required: true,
    },
    district_id: {
      type: Schema.Types.ObjectId,
      ref: 'district',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const AddressModel = model('address', addressSchema);

export default AddressModel;
