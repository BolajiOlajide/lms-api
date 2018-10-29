import Joi from 'joi';

// utils
import { loanStatus, uuidValidation, unrequiredUuidValidation } from '../utils/common';


const body = {
  loanAmount: Joi.number().positive().required(),
  details: Joi.string().required(),
  status: Joi.string().lowercase().valid(loanStatus).default('pending'),
  projectId: uuidValidation,
  bankId: uuidValidation,
  duration: Joi.number().integer().required()
};

exports.createLoanSchema = { body };

exports.updateLoanSchema = {
  params: { loanId: uuidValidation },
  body: Joi.object().keys({
    loanAmount: Joi.number().positive(),
    details: Joi.string(),
    status: Joi.string().lowercase().valid(loanStatus).default('pending'),
    projectId: unrequiredUuidValidation,
    bankId: unrequiredUuidValidation,
    partialPaymentMade: Joi.number().positive()
  })
  .or('loanAmount', 'details', 'status', 'projectId', 'bankId', 'partialPaymentMade')
};

exports.deleteLoanSchema = { params: { loanId: uuidValidation } };
