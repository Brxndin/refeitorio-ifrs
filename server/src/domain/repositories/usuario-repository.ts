import { Usuario } from '../entities/usuario.ts';

export interface UsuarioRepository {
    get(): Promise<Usuario[]>;
    find(id: number): Promise<Usuario | null>;
    insert(usuario: Usuario): Promise<number>;
    update(id: number, usuario: Usuario): Promise<number>;
    delete(id: number): Promise<number>;
}
