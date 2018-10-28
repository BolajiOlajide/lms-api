import uuid from 'uuid/v4';
import logger from 'winston';


const projects = [
  { id: uuid(), projectName: 'Experimental' },
  { id: uuid(), projectName: 'Election' },
  { id: uuid(), projectName: 'Romance' },
  { id: uuid(), projectName: 'Culinary' },
  { id: uuid(), projectName: 'Rubbish' }
];


exports.seed = knex => knex('Projects').del()
  .then(() => knex('Projects').insert(projects))
  .catch((error) => logger.error(error));
