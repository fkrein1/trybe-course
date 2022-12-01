const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).required(),
  password: Joi.string().min(3).required(),
});

module.exports = { userSchema };
