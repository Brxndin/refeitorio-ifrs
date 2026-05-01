import knexLib from 'knex';
import knexConfigs from '../knexfile.ts';

const knex = knexLib(knexConfigs);

export default knex;
