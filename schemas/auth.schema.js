import Joi from 'joi';

const baseSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
}

exports.signUpSchema = {
  body: {
    ...baseSchema,
    firstname: Joi.string().required(),
    surname: Joi.string().required()
  }
};

exports.signInSchema = { body: baseSchema };
