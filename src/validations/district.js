import Joi from 'joi';

export const districtValidate = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
});

export const districtUpdate = Joi.object({
  name: Joi.string().trim().min(2).max(100).optional(),
});
