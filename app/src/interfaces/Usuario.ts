import { TipoUsuario } from "../enums/TipoUsuario";

export interface Usuario {
    nome: string;
    email?: string;
    senha?: string;
    tipo: TipoUsuario;
}
