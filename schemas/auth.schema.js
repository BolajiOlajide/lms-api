import Joi from 'joi';

exports.signUpSchema = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    firstname: Joi.string().required(),
    surname: Joi.string().required()
  }
}

exports.signInSchema = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }
}
