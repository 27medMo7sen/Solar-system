import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

// @ts-ignore
Joi.objectId = JoiObjectId(Joi);

export const createOrderSchema = Joi.object({
  user_id: Joi.objectId().required().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId',
    'any.required': 'User ID is a required field'
  }),
  cart_id: Joi.objectId().required().messages({
    'string.pattern.name': 'Cart ID should be a valid MongoDB ObjectId',
    'any.required': 'Cart ID is a required field'
  }),
  total_price: Joi.number().positive().required().messages({
    'number.base': 'Total price should be a type of number',
    'number.positive': 'Total price should be a positive number',
    'any.required': 'Total price is a required field'
  }),
  shipping_address: Joi.string().trim().min(10).required().messages({
    'string.base': 'Shipping address should be a type of text',
    'string.empty': 'Shipping address cannot be an empty field',
    'string.min': 'Shipping address should have a minimum length of 10 characters',
    'any.required': 'Shipping address is a required field'
  }),
  status: Joi.string().trim().valid('pending', 'shipped', 'delivered', 'cancelled').required().messages({
    'string.base': 'Status should be a type of text',
    'any.only': 'Status should be one of [pending, shipped, delivered, cancelled]',
    'any.required': 'Status is a required field'
  })
});

export const updateOrderSchema = Joi.object({
  user_id: Joi.objectId().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId'
  }),
  cart_id: Joi.objectId().messages({
    'string.pattern.name': 'Cart ID should be a valid MongoDB ObjectId'
  }),
  total_price: Joi.number().positive().messages({
    'number.base': 'Total price should be a type of number',
    'number.positive': 'Total price should be a positive number'
  }),
  shipping_address: Joi.string().trim().min(10).messages({
    'string.base': 'Shipping address should be a type of text',
    'string.empty': 'Shipping address cannot be an empty field',
    'string.min': 'Shipping address should have a minimum length of 10 characters'
  }),
  status: Joi.string().trim().valid('pending', 'shipped', 'delivered', 'cancelled').messages({
    'string.base': 'Status should be a type of text',
    'any.only': 'Status should be one of [pending, shipped, delivered, cancelled]'
  })
});