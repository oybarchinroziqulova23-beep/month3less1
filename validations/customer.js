import Joi from 'joi';

export const customerValidate = Joi.object({
  fullname: Joi.string().trim().min(2).max(150).required(),
  phone: Joi.string().trim().pattern(/^\+?\d{9,15}$/).required()
    .messages({ 'string.pattern.base': 'Phone must be a valid number' }),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(128).required(),
});

export const customerUpdate = Joi.object({
  fullname: Joi.string().trim().min(2).max(150).optional(),
  phone: Joi.string().trim().pattern(/^\+?\d{9,15}$/).optional()
    .messages({ 'string.pattern.base': 'Phone must be a valid number' }),
  email: Joi.string().trim().email().optional(),
  password: Joi.string().min(6).max(128).optional(),
});
