import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createUserSchema = Joi.object({
  first_name: Joi.string().trim().required().messages({
    'string.base': 'First name should be a type of text',
    'string.empty': 'First name cannot be an empty field',
    'any.required': 'First name is a required field'
  }),
  last_name: Joi.string().trim().required().messages({
    'string.base': 'Last name should be a type of text',
    'string.empty': 'Last name cannot be an empty field',
    'any.required': 'Last name is a required field'
  }),
  phone_number: Joi.string().trim().pattern(/^[0-9]{10,15}$/).required().messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits',
    'any.required': 'Phone number is a required field'
  }),
  address: Joi.object({
    location: Joi.string().trim().required().messages({
      'string.base': 'Location should be a type of text',
      'string.empty': 'Location cannot be an empty field',
      'any.required': 'Location is a required field'
    }),
    zip_code: Joi.number().required().messages({
      'number.base': 'Zip code should be a type of number',
      'any.required': 'Zip code is a required field'
    }),
    city: Joi.string().trim().required().messages({
      'string.base': 'City should be a type of text',
      'string.empty': 'City cannot be an empty field',
      'any.required': 'City is a required field'
    }),
  }).required(),
  profile_pic: Joi.string().trim().optional().allow(null).messages({
    'string.base': 'Profile picture should be a type of text'
  }),
  installed_products: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId().required().messages({
        'string.base': 'Product ID should be a valid ObjectId',
        'any.required': 'Product ID is a required field'
      }),
      installation_location: Joi.string().trim().required().messages({
        'string.base': 'Installation location should be a type of text',
        'string.empty': 'Installation location cannot be an empty field',
        'any.required': 'Installation location is a required field'
      }),
      date_of_installation: Joi.date().required().messages({
        'date.base': 'Date of installation should be a valid date',
        'any.required': 'Date of installation is a required field'
      }),
      end_of_warranty: Joi.date().required().messages({
        'date.base': 'End of warranty should be a valid date',
        'any.required': 'End of warranty is a required field'
      }),
    })
  ).optional(),
  monthly_consumption: Joi.number().required().messages({
    'number.base': 'Monthly consumption should be a type of number',
    'any.required': 'Monthly consumption is a required field'
  }),
});

export const updateUserSchema = Joi.object({
  first_name: Joi.string().trim().optional().messages({
    'string.base': 'First name should be a type of text',
    'string.empty': 'First name cannot be an empty field'
  }),
  last_name: Joi.string().trim().optional().messages({
    'string.base': 'Last name should be a type of text',
    'string.empty': 'Last name cannot be an empty field'
  }),
  phone_number: Joi.string().trim().pattern(/^[0-9]{10,15}$/).optional().messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits'
  }),
  address: Joi.object({
    location: Joi.string().trim().optional().messages({
      'string.base': 'Location should be a type of text',
      'string.empty': 'Location cannot be an empty field'
    }),
    zip_code: Joi.number().optional().messages({
      'number.base': 'Zip code should be a type of number'
    }),
    city: Joi.string().trim().optional().messages({
      'string.base': 'City should be a type of text',
      'string.empty': 'City cannot be an empty field'
    }),
  }).optional(),
  profile_pic: Joi.string().trim().optional().allow(null).messages({
    'string.base': 'Profile picture should be a type of text'
  }),
  installed_products: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId().optional().messages({
        'string.base': 'Product ID should be a valid ObjectId'
      }),
      installation_location: Joi.string().trim().optional().messages({
        'string.base': 'Installation location should be a type of text',
        'string.empty': 'Installation location cannot be an empty field'
      }),
      date_of_installation: Joi.date().optional().messages({
        'date.base': 'Date of installation should be a valid date'
      }),
      end_of_warranty: Joi.date().optional().messages({
        'date.base': 'End of warranty should be a valid date'
      }),
    })
  ).optional(),
  monthly_consumption: Joi.number().optional().messages({
    'number.base': 'Monthly consumption should be a type of number'
  }),
});