import Joi from "joi";

const schema = Joi.object({
  page: Joi.number().integer().min(1).default(1).messages({
    "number.base": "Page must be a number",
    "number.integer": "Page must be an integer",
    "number.min": "Page must be at least 1",
    "any.empty": "Page cannot be empty",
  }),
  size: Joi.number().integer().min(1).max(100).default(10).messages({
    "number.base": "Size must be a number",
    "number.integer": "Size must be an integer",
    "number.min": "Size must be at least 1",
    "number.max": "Size must be at most 100",
    "any.empty": "Size cannot be empty",
  }),
  sort: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9_,\-]+$/)
    .optional()
    .messages({
      "string.base": "Sort must be a string",
      "string.pattern.base":
        "Sort can only contain alphanumeric characters, underscores, commas, and hyphens",
      "string.empty": "Sort cannot be empty",
    }),
  select: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9_,]+$/)
    .optional()
    .messages({
      "string.base": "Select must be a string",
      "string.pattern.base":
        "Select can only contain alphanumeric characters and underscores",
      "string.empty": "Select cannot be empty",
    }),
  search: Joi.string().trim().min(1).optional().messages({
    "string.base": "Search must be a string",
    "string.min": "Search must be at least 1 character long",
    "string.empty": "Search cannot be empty",
  }),
  fields: Joi.string()
    .trim()
    .optional()
    .regex(/^[a-zA-Z0-9_,]+$/)
    .messages({
      "string.base":
        "Fields must be a comma-separated string of valid field names",
      "string.pattern.base":
        "Fields can only contain alphanumeric characters and underscores",
      "string.empty": "Fields cannot be empty",
    }),
});

export const validateQuery = () => {
  return (req, res, next) => {
    const schema = schema;
    const { error, value } = schema.validate(req.query, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    req.query = value;
    next();
  };
};
