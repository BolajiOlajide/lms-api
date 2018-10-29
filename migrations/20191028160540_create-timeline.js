import logger from 'winston';

// utils
import { timelineTypes } from '../utils/common';


exports.up = knex => knex.schema
  .createTable('Timelines', table => {
    table.uuid('id').notNullable().primary();
    table.enu('type', timelineTypes).notNullable();
    table.text('comment');
    table.string('url');
    table.uuid('loanId').references('id').inTable('Loans');
    table.timestamps(false, true); // no need to explicitly specify `created_at` and `updated_at`
    // table.timestamp("createdAt").defaultTo(knex.fn.now());
    // table.timestamp("updatedAt").defaultTo(knex.fn.now());
  }).catch(error => logger.error(error));

exports.down = knex => knex
  .schema.dropTable('Timelines')
  .catch(error => logger.error(error));
