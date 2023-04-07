import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meats', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.text('description').notNullable()
    table.timestamp('date_and_hour').notNullable()
    table.boolean('isFitness').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.uuid('userId').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meats')
}
