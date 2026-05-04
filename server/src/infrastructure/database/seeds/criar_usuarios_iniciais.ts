import type { Knex } from 'knex';
import { UsuarioTipo } from '../../../domain/entities/usuario.ts';

export async function seed(knex: Knex): Promise<void> {
    await knex('usuarios').del();

    await knex('usuarios').insert([
        {
            nome: 'Administrador',
            email: 'admin@ifrs.edu.br',
            // senha: Senha.123
            senha: '$2b$12$fkCox86SvdMTzA7c6XDWLuIEBeq7fPa2ST3Uql8iY5sFkgD/9erXi',
            tipo: UsuarioTipo.ADMINISTRADOR,
        },
        {
            nome: 'João',
            email: 'joao@ifrs.edu.br',
            // senha: Senha.123
            senha: '$2b$12$fkCox86SvdMTzA7c6XDWLuIEBeq7fPa2ST3Uql8iY5sFkgD/9erXi',
            tipo: UsuarioTipo.SERVIDOR,
        },
        {
            nome: 'Maria',
            email: 'maria@ifrs.edu.br',
            // senha: Senha.123
            senha: '$2b$12$fkCox86SvdMTzA7c6XDWLuIEBeq7fPa2ST3Uql8iY5sFkgD/9erXi',
            tipo: UsuarioTipo.ALUNO,
        },
    ]);
}
