import { ValidationError } from "../errors/validation-error.ts";

export class Senha {
    private readonly value: string;

    private constructor (senha: string) {
        this.value = senha;
    }

    public static create(senha: string) {
        const padraoSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&._-])[a-zA-Z\d@$!%*?&._-]{7,}$/;

        if (!padraoSenha.test(senha)) {
            throw new ValidationError('A senha deve conter letras maiúsculas, minúsculas, números e símbolos e ter no mínimo 7 dígitos!');
        }

        return new Senha(senha);
    }

    public getValue() {
        return this.value;
    }
}
