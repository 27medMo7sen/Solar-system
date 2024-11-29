import Joi from "joi";
import JoiObjectId from "joi-objectid";

Joi.objectId = JoiObjectId(Joi);

const idParamSchema = Joi.object({
  id: Joi.objectId().messages({
    "string.pattern.name": "Id should be a valid MongoDB Id",
  }),
});

export const validateId = () => {
  return (req, res, next) => {
    const { error, value } = idParamSchema.validate(req.params, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    req.params = value;
    next();
  };
};
