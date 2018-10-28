import logger from 'winston';


exports.up = knex => knex.schema
  .createTable('Loans', table => {
    table.uuid('id').primary();
    table.integer('loanNumber').notNullable();
    table.float('loanAmount').notNullable();
    table.float('partialPaymentMade').notNullable();
    table.date('openingDate').notNullable();
    table.date('dueDate').notNullable();
    table.text('details').notNullable();
    table.uuid('projectId').references('id').inTable('Projects');
    table.uuid('bankId').references('id').inTable('Banks');
    table.uuid('userId').references('id').inTable('Users');
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));

exports.down = knex => knex
  .schema.dropTable('Loans')
  .catch(error => logger.error(error));
