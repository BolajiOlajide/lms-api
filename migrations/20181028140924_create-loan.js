import logger from 'winston';


exports.up = (knex, Promise) => {
  return knex.schema.createTable('Loans', (table) => {
    table.uuid('id').primary();
    table.string('bankName');
    table.integer('loanNumber');
    table.float('loanAmount');
    table.float('partialPaymentMade');
    table.date('openingDate');
    table.date('dueDate');
    table.string('project');
    table.text('details');
    table.uuid('userId').references('id').inTable('Users');
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));
};

exports.down = (knex, Promise) => knex.schema.dropTable('Loans');
