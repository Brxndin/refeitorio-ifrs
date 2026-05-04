import { UsuarioTipo } from "../../domain/entities/usuario.ts";

export interface UsuarioInput {
    nome: string;
    tipo: UsuarioTipo;
    email: string;
    senha: string;
}
