require('dotenv').config();
const knex = require('knex');
const bookshelf = require('bookshelf');
const bookshelfUuid = require('bookshelf-uuid');


const connectionString = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  },
  charset: 'utf8',
  debug: (process.env.NODE_ENV === 'development')
};

const bookshelfInstance = bookshelf(knex(connectionString));
const _bookshelf = bookshelfInstance.plugin(bookshelfUuid);

module.exports = _bookshelf;
