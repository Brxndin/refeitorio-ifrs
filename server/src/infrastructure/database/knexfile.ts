import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });

export default {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_ROOT_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    migrations: {
        directory: './migrations',
        extension: 'ts'
    },
    seeds: {
        directory: './seeds',
        extension: 'ts'
    },
};
