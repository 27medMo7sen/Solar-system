import Joi from 'joi';

export const createBrandSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name should be a type of text',
    'string.empty': 'Name cannot be an empty field',
    'any.required': 'Name is a required field'
  }),
  logo: Joi.string().optional().messages({
    'string.base': 'Logo should be a type of text',
    'string.empty': 'Logo cannot be an empty field'
  })
});

export const updateBrandSchema = Joi.object({
  name: Joi.string().messages({
    'string.base': 'Name should be a type of text',
    'string.empty': 'Name cannot be an empty field'
  }),
  logo: Joi.string().messages({
    'string.base': 'Logo should be a type of text',
    'string.empty': 'Logo cannot be an empty field'
  })
});