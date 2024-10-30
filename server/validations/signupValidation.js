// validation/signUpValidation.js
const Joi = require("joi");

const signUpValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .pattern(
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])")
      )
      .required()
      .messages({
        "string.min": "Password must be at least 8 characters",
        "string.pattern.base":
          "Password must include uppercase, lowercase, number, and special character",
      }),
  });
  return schema.validate(data);
};

module.exports = signUpValidation;
