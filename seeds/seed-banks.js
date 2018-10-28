import uuid from 'uuid/v4';
import logger from 'winston';


const banks = [
  { id: uuid(), bankName: 'Bank A' },
  { id: uuid(), bankName: 'Bank B' },
  { id: uuid(), bankName: 'Bank C' },
  { id: uuid(), bankName: 'Bank D' },
  { id: uuid(), bankName: 'Bank D' },
  { id: uuid(), bankName: 'Bank E' },
  { id: uuid(), bankName: 'Bank F' },
  { id: uuid(), bankName: 'Bank G' },
  { id: uuid(), bankName: 'Bank H' },
  { id: uuid(), bankName: 'Bank I' }
];


exports.seed = knex => knex('Banks').del()
  .then(() => knex('Banks').insert(banks))
  .catch((error) => logger.error(error));
