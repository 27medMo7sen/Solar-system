import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createMaintenanceSchema = Joi.object({
  user_id: Joi.objectId().required().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId',
    'any.required': 'User ID is a required field'
  }),
  time: Joi.date().required().messages({
    'date.base': 'Time should be a valid date',
    'any.required': 'Time is a required field'
  }),
  done_by: Joi.string().min(3).required().messages({
    'string.base': 'Done by should be a type of text',
    'string.empty': 'Done by cannot be an empty field',
    'string.min': 'Done by should have a minimum length of 3 characters',
    'any.required': 'Done by is a required field'
  }),
  type: Joi.string().min(3).required().messages({
    'string.base': 'Type should be a type of text',
    'string.empty': 'Type cannot be an empty field',
    'string.min': 'Type should have a minimum length of 3 characters',
    'any.required': 'Type is a required field'
  }),
  details: Joi.string().max(1000).optional().messages({
    'string.base': 'Details should be a type of text',
    'string.max': 'Details should have a maximum length of 1000 characters'
  }),
  next_maintenance: Joi.date().greater('now').optional().messages({
    'date.base': 'Next maintenance should be a valid date',
    'date.greater': 'Next maintenance should be in the future'
  })
});

export const updateMaintenanceSchema = Joi.object({
  user_id: Joi.objectId().messages({
    'string.pattern.name': 'User ID should be a valid MongoDB ObjectId'
  }),
  time: Joi.date().messages({
    'date.base': 'Time should be a valid date'
  }),
  done_by: Joi.string().min(3).messages({
    'string.base': 'Done by should be a type of text',
    'string.empty': 'Done by cannot be an empty field',
    'string.min': 'Done by should have a minimum length of 3 characters'
  }),
  type: Joi.string().min(3).messages({
    'string.base': 'Type should be a type of text',
    'string.empty': 'Type cannot be an empty field',
    'string.min': 'Type should have a minimum length of 3 characters'
  }),
  details: Joi.string().max(1000).messages({
    'string.base': 'Details should be a type of text',
    'string.max': 'Details should have a maximum length of 1000 characters'
  }),
  next_maintenance: Joi.date().greater('now').messages({
    'date.base': 'Next maintenance should be a valid date',
    'date.greater': 'Next maintenance should be in the future'
  })
});