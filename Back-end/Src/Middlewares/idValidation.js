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
      const errorMessage = error.details.map((detail) => detail.message);
      return next(new Error(errorMessage, { cause: 400 }));
    }

    req.params = value;
    next();
  };
};
