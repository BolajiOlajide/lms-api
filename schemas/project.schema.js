import Joi from 'joi';


const params = {
  projectId: Joi.string().guid({
    version: ['uuidv4']
  }).required()
};

const body = {
  projectName: Joi.string().required()
}

exports.createProjectSchema = { body };
