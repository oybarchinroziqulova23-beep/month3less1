import Joi from 'joi';

export const productValidate = Joi.object({
  name: Joi.string().trim().min(1).max(150).required(),
  description: Joi.string().trim().max(500).optional().allow('', null),
  volume_liters: Joi.number().positive().required(),
  price: Joi.number().min(0).required(),
  available: Joi.boolean().optional(),
});

export const productUpdate = Joi.object({
  name: Joi.string().trim().min(1).max(150).optional(),
  description: Joi.string().trim().max(500).optional().allow('', null),
  volume_liters: Joi.number().positive().optional(),
  price: Joi.number().min(0).optional(),
  available: Joi.boolean().optional(),
});
