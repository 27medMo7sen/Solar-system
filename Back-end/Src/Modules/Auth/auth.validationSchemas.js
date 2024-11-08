import Joi from 'joi';

export const loginValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a type of text',
    'string.empty': 'Email cannot be an empty field',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is a required field'
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password should be a type of text',
    'string.empty': 'Password cannot be an empty field',
    'any.required': 'Password is a required field'
  }),
});