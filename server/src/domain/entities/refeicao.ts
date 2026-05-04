import { ValidationError } from '../errors/validation-error.ts';
import { RefeicaoItem } from './refeicao-item.ts';

export enum RefeicaoTipo {
    CAFE_DA_MANHA = 1,
    ALMOCO = 2,
    JANTAR = 3,
}

export interface RefeicaoProps {
    id?: number;
    tipo: RefeicaoTipo;
    itens: RefeicaoItem[];
}

export class Refeicao {
    private readonly props: RefeicaoProps;

    constructor(props: RefeicaoProps) {
        this.validaItens(props.itens);

        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get itens(): RefeicaoItem[] {
        return this.props.itens;
    }

    get tipo(): RefeicaoTipo {
        return this.props.tipo;
    }

    set itens(itens: RefeicaoItem[]) {
        this.validaItens(itens);

        this.props.itens = itens;
    }

    set tipo(tipo: RefeicaoTipo) {
        this.props.tipo = tipo;
    }

    private validaItens(itens: RefeicaoItem[]) {
        if (itens.length <= 0) {
            throw new ValidationError('Cada refeição precisa de, pelo menos, um item!');
        }
    }
}
