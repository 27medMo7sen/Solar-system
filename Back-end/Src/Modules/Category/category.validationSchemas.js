import Joi from "joi";

export const createCategorySchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of 3 characters",
    "any.required": "Name is a required field",
  }),
  description: Joi.string().max(500).optional().messages({
    "string.base": "Description should be a type of text",
    "string.max": "Description should have a maximum length of 500 characters",
  }),
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of 3 characters",
  }),
  description: Joi.string().max(500).messages({
    "string.base": "Description should be a type of text",
    "string.max": "Description should have a maximum length of 500 characters",
  }),
});
