import logger from 'winston';


exports.up = knex => knex.schema
  .createTable('Users', table => {
    table.uuid('id').notNullable().primary();
    table.string('firstname').notNullable();
    table.string('surname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));

exports.down = knex => knex
  .schema.dropTable('Users')
  .catch(error => logger.error(error));
