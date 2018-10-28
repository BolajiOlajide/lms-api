import logger from 'winston';


exports.up = knex => knex.schema
  .createTable('Timeline', table => {
    table.uuid('id').primary();
    table.string('type');
    table.uuid('loanId').references('id').inTable('Loans');
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));

exports.down = knex => knex
  .schema.dropTable('Timeline')
  .catch(error => logger.error(error));
