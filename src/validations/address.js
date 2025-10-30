import Joi from 'joi';

const objectId = Joi.string().hex().length(24);

export const addressValidate = Joi.object({
  street: Joi.string().trim().min(2).max(200).required(),
  house_number: Joi.string().trim().min(1).max(50).required(),
  landmark: Joi.string().trim().max(200).optional().allow('', null),
  customer_id: objectId.required(),
  district_id: objectId.required(),
});

export const addressUpdate = Joi.object({
  street: Joi.string().trim().min(2).max(200).optional(),
  house_number: Joi.string().trim().min(1).max(50).optional(),
  landmark: Joi.string().trim().max(200).optional().allow('', null),
  customer_id: objectId.optional(),
  district_id: objectId.optional(),
});
