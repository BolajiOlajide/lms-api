import Joi from 'joi';


export const loanStatus = ['paid', 'due', 'cancelled', 'pending'];

export const unrequiredUuidValidation = Joi.string().guid({
  version: ['uuidv4']
});

export const uuidValidation = unrequiredUuidValidation.required();
