import Joi from 'joi';

const params = {
  bankId: Joi.string().guid({
    version: ['uuidv4']
  }).required()
};

const body = {
  bankName: Joi.string().required()
}

exports.createBankSchema = { body };

exports.updateBankSchema = { params, body };

exports.deleteBankSchema = { params }
