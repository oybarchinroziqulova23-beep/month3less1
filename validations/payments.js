import Joi from 'joi';
const objectId = Joi.string().hex().length(24);

export const paymentValidate = Joi.object({
  order_id: objectId.required(),
  amount: Joi.number().min(0).required(),
  method: Joi.string().valid('cash', 'card', 'transfer').required(),
  status: Joi.string().valid('pending', 'completed', 'failed').optional(),
  transaction_id: Joi.string().trim().optional().allow('', null),
});

export const paymentUpdate = Joi.object({
  amount: Joi.number().min(0).optional(),
  method: Joi.string().valid('cash', 'card', 'transfer').optional(),
  status: Joi.string().valid('pending', 'completed', 'failed').optional(),
  transaction_id: Joi.string().trim().optional().allow('', null),
});
