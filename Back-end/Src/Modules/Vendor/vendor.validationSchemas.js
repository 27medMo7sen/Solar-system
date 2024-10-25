import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createVendorSchema = Joi.object({
  company_name: Joi.string().min(3).required().messages({
    'string.base': 'Company name should be a type of text',
    'string.empty': 'Company name cannot be an empty field',
    'string.min': 'Company name should have a minimum length of 3 characters',
    'any.required': 'Company name is a required field'
  }),
  contact_person: Joi.string().min(3).required().messages({
    'string.base': 'Contact person should be a type of text',
    'string.empty': 'Contact person cannot be an empty field',
    'string.min': 'Contact person should have a minimum length of 3 characters',
    'any.required': 'Contact person is a required field'
  }),
  phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits',
    'any.required': 'Phone number is a required field'
  }),
  website: Joi.string().uri().optional().allow(null).messages({
    'string.base': 'Website should be a type of text',
    'string.uri': 'Website should be a valid URL'
  }),
  address: Joi.string().optional().allow(null).messages({
    'string.base': 'Address should be a type of text'
  }),
  profile_picture: Joi.string().optional().allow(null).messages({
    'string.base': 'Profile picture should be a type of text'
  }),
});

export const updateVendorSchema = Joi.object({
  company_name: Joi.string().min(3).messages({
    'string.base': 'Company name should be a type of text',
    'string.empty': 'Company name cannot be an empty field',
    'string.min': 'Company name should have a minimum length of 3 characters'
  }),
  contact_person: Joi.string().min(3).messages({
    'string.base': 'Contact person should be a type of text',
    'string.empty': 'Contact person cannot be an empty field',
    'string.min': 'Contact person should have a minimum length of 3 characters'
  }),
  phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits'
  }),
  website: Joi.string().uri().optional().allow(null).messages({
    'string.base': 'Website should be a type of text',
    'string.uri': 'Website should be a valid URL'
  }),
  address: Joi.string().optional().allow(null).messages({
    'string.base': 'Address should be a type of text'
  }),
  profile_picture: Joi.string().optional().allow(null).messages({
    'string.base': 'Profile picture should be a type of text'
  }),
});