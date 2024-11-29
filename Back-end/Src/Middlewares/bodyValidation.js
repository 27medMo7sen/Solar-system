export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    if (Object.keys(value).length === 0) {
      return res
        .status(400)
        .json({
          message: "Request body must contain at least one valid field.",
        });
    }
    req.body = value;
    next();
  };
};
