import Joi from 'joi';
const objectId = Joi.string().hex().length(24);

export const staffValidate = Joi.object({
  name: Joi.string().trim().min(2).max(150).required(),
  phone: Joi.string().trim().pattern(/^\+?\d{9,15}$/).required()
    .messages({ 'string.pattern.base': 'Phone must be a valid number' }),
  vehicle_number: Joi.string().trim().min(1).max(50).required(),
  district_id: objectId.required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(128).required(),
  role: Joi.string().valid('staff').optional(),
});

export const staffUpdate = Joi.object({
  name: Joi.string().trim().min(2).max(150).optional(),
  phone: Joi.string().trim().pattern(/^\+?\d{9,15}$/).optional()
    .messages({ 'string.pattern.base': 'Phone must be a valid number' }),
  vehicle_number: Joi.string().trim().min(1).max(50).optional(),
  district_id: objectId.optional(),
  email: Joi.string().trim().email().optional(),
  password: Joi.string().min(6).max(128).optional(),
  role: Joi.string().valid('staff').optional(),
});
