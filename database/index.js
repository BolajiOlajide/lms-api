const knex = require('knex');
const bookshelf = require('bookshelf');
const bookshelfUuid = require('bookshelf-uuid');
const knexConfig = require('../knexConfig');


const bookshelfInstance = bookshelf(knex(knexConfig));
const _bookshelf = bookshelfInstance.plugin(bookshelfUuid);

module.exports = _bookshelf;
