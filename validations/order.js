import Joi from 'joi';
const objectId = Joi.string().hex().length(24);

const orderItemSchema = Joi.object({
  product_id: objectId.required(),
  quantity: Joi.number().integer().min(1).required(),
});

export const orderValidate = Joi.object({
  customer_id: objectId.required(),
  address_id: objectId.required(),
  delivery_staff_id: objectId.required(),
  items: Joi.array().items(orderItemSchema).min(1).required(),
  total_amount: Joi.number().min(0).required(),
  delivery_date: Joi.date().optional(),
  status: Joi.string().valid('pending', 'on_delivery', 'delivered', 'cancelled').optional(),
});

export const orderUpdate = Joi.object({
  address_id: objectId.optional(),
  delivery_staff_id: objectId.optional(),
  items: Joi.array().items(orderItemSchema).min(1).optional(),
  total_amount: Joi.number().min(0).optional(),
  delivery_date: Joi.date().optional(),
  status: Joi.string().valid('pending', 'on_delivery', 'delivered', 'cancelled').optional(),
});
