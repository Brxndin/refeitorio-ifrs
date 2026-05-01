export class ValidationError extends Error {
    constructor(mensagem: string) {
        super(mensagem);

        this.name = 'ValidationError';
    }
}
