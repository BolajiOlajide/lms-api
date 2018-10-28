import logger from 'winston';

module.exports = {
  up(knex) {
    return knex.schema.createTable('Users', (table) => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('password');
    }).catch(error => logger.error(error));
  },

  down(knex) {
    return knex.schema.dropTable('Users');
  }
};
