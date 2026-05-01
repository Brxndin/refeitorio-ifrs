import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema
        .createTable('usuarios', function (table) {
            table.increments('id').primary();
            table.string('nome', 200).notNullable();
            table.string('email', 200).notNullable();
            table.string('senha', 200);
            table.integer('tipo').unsigned();
        })
        .createTable('cardapios', function (table) {
            table.increments('id').primary();
            table.date('data').notNullable();
            table.boolean('favorito').notNullable();
        })
        .createTable('refeicoes', function (table) {
            table.increments('id').primary();
            table.integer('tipo').unsigned();
            table.integer('cardapio_id').unsigned().notNullable();

            table.foreign('cardapio_id').references('id').inTable('cardapios');
        })
        .createTable('refeicoes_itens', function (table) {
            table.increments('id').primary();
            table.string('nome', 200).notNullable();
            table.integer('refeicao_id').unsigned().notNullable();

            table.foreign('refeicao_id').references('id').inTable('refeicoes');
        });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('usuarios');
    await knex.schema.dropTable('cardapios');
    await knex.schema.dropTable('refeicoes');
    await knex.schema.dropTable('refeicoes_itens');
}
