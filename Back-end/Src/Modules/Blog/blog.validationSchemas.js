import Joi from 'joi';

export const createBlogSchema = Joi.object({
  title: Joi.string().trim().min(3).required().messages({
    'string.base': 'Title should be a type of text',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of 3 characters',
    'any.required': 'Title is a required field'
  }),
  author: Joi.string().trim().min(3).required().messages({
    'string.base': 'Author should be a type of text',
    'string.empty': 'Author cannot be an empty field',
    'string.min': 'Author should have a minimum length of 3 characters',
    'any.required': 'Author is a required field'
  }),
  content: Joi.string().trim().min(10).required().messages({
    'string.base': 'Content should be a type of text',
    'string.empty': 'Content cannot be an empty field',
    'string.min': 'Content should have a minimum length of 10 characters',
    'any.required': 'Content is a required field'
  })
});

export const updateBlogSchema = Joi.object({
  title: Joi.string().trim().min(3).messages({
    'string.base': 'Title should be a type of text',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of 3 characters'
  }),
  author: Joi.string().trim().min(3).messages({
    'string.base': 'Author should be a type of text',
    'string.empty': 'Author cannot be an empty field',
    'string.min': 'Author should have a minimum length of 3 characters'
  }),
  content: Joi.string().trim().min(10).messages({
    'string.base': 'Content should be a type of text',
    'string.empty': 'Content cannot be an empty field',
    'string.min': 'Content should have a minimum length of 10 characters'
  })
});