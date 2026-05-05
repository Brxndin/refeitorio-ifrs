import { Knex } from 'knex';
import { Usuario } from '../../domain/entities/usuario.ts';
import { UsuarioRepository } from '../../domain/repositories/usuario-repository.ts';
import { Email } from '../../domain/value-objects/email.ts';
import { Senha } from '../../domain/value-objects/senha.ts';

interface UsuarioRaw {
    id: number;
    nome: string;
    tipo: number;
    email: string;
    senha: string;
}

export class KnexUsuarioRepository implements UsuarioRepository {
    private readonly knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    private parseJson<T>(data: any): T[] {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }

        return data || [];
    }

    private getBaseQuery() {
        return this.knex<UsuarioRaw[]>('usuarios').select('usuarios.*');
    }

    private dataMap(usuario: UsuarioRaw): Usuario {
        return new Usuario({
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo,
            email: Email.create(usuario.email),
            senha: Senha.create(usuario.senha),
        });
    }

    public async get(): Promise<Usuario[]> {
        const usuarios = await this.getBaseQuery();

        return usuarios.map((usuario) => this.dataMap(usuario));
    }

    public async find(id: number): Promise<Usuario | null> {
        const usuario = await this.getBaseQuery().where('usuarios.id', id).first();

        if (!usuario) {
            return null;
        }

        return this.dataMap(usuario);
    }

    public async insert(usuario: Usuario): Promise<number> {
        return await this.knex.transaction(async (trx) => {
            const [usuarioId] = await trx('usuarios').insert({
                nome: usuario.nome,
                tipo: usuario.tipo,
                email: usuario.email,
                senha: usuario.senha,
            });

            return usuarioId;
        });
    }

    public async update(id: number, usuario: Usuario): Promise<number> {
        console.log('Ainda não desenvolvido');

        return 0;
    }

    public async delete(id: number): Promise<number> {
        let linhasAlteradas = 0;

        return await this.knex.transaction(async (trx) => {
            linhasAlteradas += await trx('refeicoes')
                .where('refeicoes.cardapio_id', id)
                .delete();

            return linhasAlteradas;
        });
    }
}
