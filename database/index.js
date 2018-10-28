const knex = require('knex');
const bookshelf = require('bookshelf');
const bookshelfUUID = require('bookshelf-uuid');
const bookshelfBcrypt = require('bookshelf-bcrypt');
const knexConfig = require('../knexfile');


const bookshelfInstance = bookshelf(knex(knexConfig));
bookshelfInstance.plugin(bookshelfUUID);
bookshelfInstance.plugin(bookshelfBcrypt);

module.exports = bookshelfInstance;
