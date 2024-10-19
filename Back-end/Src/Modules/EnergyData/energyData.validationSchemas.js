import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createEnergyDataSchema = Joi.object({
  user_id: Joi.objectId().required().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId',
    'any.required': 'User ID is a required field'
  }),
  date: Joi.date().required().messages({
    'date.base': 'Date should be a valid date',
    'any.required': 'Date is a required field'
  }),
  usage: Joi.number().positive().required().messages({
    'number.base': 'Usage should be a type of number',
    'number.positive': 'Usage should be a positive number',
    'any.required': 'Usage is a required field'
  }),
  start_time_interval: Joi.date().required().messages({
    'date.base': 'Start time interval should be a valid date',
    'any.required': 'Start time interval is a required field'
  }),
  end_time_interval: Joi.date().required().messages({
    'date.base': 'End time interval should be a valid date',
    'any.required': 'End time interval is a required field'
  }),
  savings_estimate: Joi.number().positive().optional().messages({
    'number.base': 'Savings estimate should be a type of number',
    'number.positive': 'Savings estimate should be a positive number'
  })
});

export const updateEnergyDataSchema = Joi.object({
  user_id: Joi.objectId().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId'
  }),
  date: Joi.date().messages({
    'date.base': 'Date should be a valid date'
  }),
  usage: Joi.number().positive().messages({
    'number.base': 'Usage should be a type of number',
    'number.positive': 'Usage should be a positive number'
  }),
  start_time_interval: Joi.date().messages({
    'date.base': 'Start time interval should be a valid date'
  }),
  end_time_interval: Joi.date().messages({
    'date.base': 'End time interval should be a valid date'
  }),
  savings_estimate: Joi.number().positive().messages({
    'number.base': 'Savings estimate should be a type of number',
    'number.positive': 'Savings estimate should be a positive number'
  })
});