import { ValidationError } from '../errors/validation-error.ts';
import { Email } from '../value-objects/email.ts';
import { Senha } from '../value-objects/senha.ts';

export enum UsuarioTipo {
    ADMINISTRADOR = 1,
    SERVIDOR = 2,
    ALUNO = 3,
}

export interface UsuarioProps {
    id?: number;
    nome: string;
    tipo: UsuarioTipo;
    email: Email;
    senha: Senha;
}

export class Usuario {
    private readonly props: UsuarioProps;

    constructor(props: UsuarioProps) {
        this.validaNome(props.nome);

        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get tipo(): UsuarioTipo {
        return this.props.tipo;
    }

    get email(): string {
        return this.props.email.getValue();
    }

    set nome(nome: string) {
        this.validaNome(nome);

        this.props.nome = nome;
    }

    set tipo(tipo: UsuarioTipo) {
        this.props.tipo = tipo;
    }

    set email(email: Email) {
        this.props.email = email;
    }

    set senha(senha: Senha) {
        this.props.senha = senha;
    }

    private validaNome(nome: string) {
        if (nome.length > 200) {
            throw new ValidationError('O nome não pode ter mais do que 200 caracteres!');
        }
    }
}
