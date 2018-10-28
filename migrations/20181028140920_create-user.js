import logger from 'winston';


exports.up = (knex, Promise) => {
  return knex.schema.createTable('Users', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.string('password');
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));
};

exports.down = (knex, Promise) => knex.schema.dropTable('Users');
