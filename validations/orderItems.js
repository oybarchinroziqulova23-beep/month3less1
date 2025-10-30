import Joi from 'joi';
const objectId = Joi.string().hex().length(24);

export const orderItemValidate = Joi.object({
  order_id: objectId.required(),
  product_id: objectId.required(),
  quantity: Joi.number().integer().min(1).required(),
  price: Joi.number().min(0).required(),
  total: Joi.number().min(0).required(),
});

export const orderItemUpdate = Joi.object({
  product_id: objectId.optional(),
  quantity: Joi.number().integer().min(1).optional(),
  price: Joi.number().min(0).optional(),
  total: Joi.number().min(0).optional(),
});
