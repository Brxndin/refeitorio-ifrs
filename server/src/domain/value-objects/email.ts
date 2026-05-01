import { ValidationError } from "../errors/validation-error.ts";

export class Email {
    private readonly value: string;

    private constructor (email: string) {
        this.value = email;
    }

    public static create(email: string) {
        const padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

        if (!padraoEmail.test(email)) {
            throw new ValidationError('O e-mail informado é inválido!');
        }

        return new Email(email);
    }

    public getValue() {
        return this.value;
    }
}
