import dayjs from 'dayjs';
import { Usuario } from '../../domain/entities/usuario.ts';

export class UsuarioPresenter {
    static toJson(usuario: Usuario | null): object | null {
        if (!usuario) {
            return null;
        }

        return {
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo,
            email: usuario.email,
        };
    }
}
