import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createCartSchema = Joi.object({
  user_id: Joi.objectId().required().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId',
    'any.required': 'User ID is a required field'
  }),
  products: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId().required().messages({
        'string.pattern.name': 'Product ID should be a valid MongoDB ObjectId',
        'any.required': 'Product ID is a required field'
      }),
      quantity: Joi.number().positive().required().messages({
        'number.base': 'Quantity should be a type of number',
        'number.positive': 'Quantity should be a positive number',
        'any.required': 'Quantity is a required field'
      })
    })
  ).required().messages({
    'array.base': 'Products should be an array',
    'any.required': 'Products is a required field'
  })
});

export const updateCartSchema = Joi.object({
  user_id: Joi.objectId().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId'
  }),
  products: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId().messages({
        'string.pattern.name': 'Product ID should be a valid MongoDB ObjectId'
      }),
      quantity: Joi.number().positive().messages({
        'number.base': 'Quantity should be a type of number',
        'number.positive': 'Quantity should be a positive number'
      })
    })
  ).messages({
    'array.base': 'Products should be an array'
  })
});