import logger from 'winston';

// utils
import { loanStatus } from '../utils/common';


exports.up = knex => knex.schema
  .createTable('Loans', table => {
    table.uuid('id').notNullable().primary();
    table.float('loanAmount').notNullable();
    table.float('partialPaymentMade').notNullable();
    table.dateTime('openingDate').notNullable();
    table.dateTime('dueDate').notNullable();
    table.text('details').notNullable();
    table.enu('status', loanStatus).notNullable();
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
