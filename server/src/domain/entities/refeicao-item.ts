import { ValidationError } from "../errors/validation-error.ts";

export interface RefeicaoItemProps {
    id?: number;
    nome: string;
}

export class RefeicaoItem {
    private readonly props: RefeicaoItemProps;

    constructor(props: RefeicaoItemProps) {
        this.validaNome(props.nome);

        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    set nome(nome: string) {
        this.validaNome(nome);

        this.props.nome = nome;
    }

    private validaNome(nome: string) {
        if (nome.length > 200) {
            throw new ValidationError('O nome não pode conter mais do que 200 caracteres!');
        }
    }
}
