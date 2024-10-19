import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name should be a type of text',
    'string.empty': 'Name cannot be an empty field',
    'string.min': 'Name should have a minimum length of 3 characters',
    'any.required': 'Name is a required field'
  }),
  model: Joi.string().min(3).required().messages({
    'string.base': 'Model should be a type of text',
    'string.empty': 'Model cannot be an empty field',
    'string.min': 'Model should have a minimum length of 3 characters',
    'any.required': 'Model is a required field'
  }),
  description: Joi.string().max(1000).optional().messages({
    'string.base': 'Description should be a type of text',
    'string.max': 'Description should have a maximum length of 1000 characters'
  }),
  category_id: Joi.objectId().required().messages({
    'string.pattern.name': 'Category ID should be a valid MongoDB ObjectId',
    'any.required': 'Category ID is a required field'
  }),
  power_output: Joi.number().positive().required().messages({
    'number.base': 'Power output should be a type of number',
    'number.positive': 'Power output should be a positive number',
    'any.required': 'Power output is a required field'
  }),
  efficiency: Joi.number().positive().required().messages({
    'number.base': 'Efficiency should be a type of number',
    'number.positive': 'Efficiency should be a positive number',
    'any.required': 'Efficiency is a required field'
  }),
  images: Joi.array().items(Joi.string().uri()).optional().messages({
    'array.base': 'Images should be an array of URLs',
    'string.uri': 'Each image should be a valid URL'
  }),
  brand: Joi.objectId().required().messages({
    'string.pattern.name': 'Brand ID should be a valid MongoDB ObjectId',
    'any.required': 'Brand ID is a required field'
  }),
  warranty_years: Joi.number().positive().required().messages({
    'number.base': 'Warranty years should be a type of number',
    'number.positive': 'Warranty years should be a positive number',
    'any.required': 'Warranty years is a required field'
  }),
  price: Joi.number().positive().required().messages({
    'number.base': 'Price should be a type of number',
    'number.positive': 'Price should be a positive number',
    'any.required': 'Price is a required field'
  }),
  stock_quantity: Joi.number().positive().required().messages({
    'number.base': 'Stock quantity should be a type of number',
    'number.positive': 'Stock quantity should be a positive number',
    'any.required': 'Stock quantity is a required field'
  })
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).messages({
    'string.base': 'Name should be a type of text',
    'string.empty': 'Name cannot be an empty field',
    'string.min': 'Name should have a minimum length of 3 characters'
  }),
  model: Joi.string().min(3).messages({
    'string.base': 'Model should be a type of text',
    'string.empty': 'Model cannot be an empty field',
    'string.min': 'Model should have a minimum length of 3 characters'
  }),
  description: Joi.string().max(1000).messages({
    'string.base': 'Description should be a type of text',
    'string.max': 'Description should have a maximum length of 1000 characters'
  }),
  category_id: Joi.objectId().messages({
    'string.pattern.name': 'Category ID should be a valid MongoDB ObjectId'
  }),
  power_output: Joi.number().positive().messages({
    'number.base': 'Power output should be a type of number',
    'number.positive': 'Power output should be a positive number'
  }),
  efficiency: Joi.number().positive().messages({
    'number.base': 'Efficiency should be a type of number',
    'number.positive': 'Efficiency should be a positive number'
  }),
  images: Joi.array().items(Joi.string().uri()).messages({
    'array.base': 'Images should be an array of URLs',
    'string.uri': 'Each image should be a valid URL'
  }),
  brand: Joi.objectId().messages({
    'string.pattern.name': 'Brand ID should be a valid MongoDB ObjectId'
  }),
  warranty_years: Joi.number().positive().messages({
    'number.base': 'Warranty years should be a type of number',
    'number.positive': 'Warranty years should be a positive number'
  }),
  price: Joi.number().positive().messages({
    'number.base': 'Price should be a type of number',
    'number.positive': 'Price should be a positive number'
  }),
  stock_quantity: Joi.number().positive().messages({
    'number.base': 'Stock quantity should be a type of number',
    'number.positive': 'Stock quantity should be a positive number'
  })
});