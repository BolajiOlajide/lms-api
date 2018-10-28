const knex = require('knex');
const bookshelf = require('bookshelf');
const bookshelfUUID = require('bookshelf-uuid');
const knexConfig = require('../knexfile');


const bookshelfInstance = bookshelf(knex(knexConfig));
bookshelfInstance.plugin(bookshelfUUID);

module.exports = bookshelfInstance;
