export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({ message: errorMessages });
    }
    console.log(value);
    if (Object.keys(value).length === 0) {
      return res.status(400).json({ message: "Request body must contain at least one valid field." });
    }
    req.body = value;
    next();
  };
};