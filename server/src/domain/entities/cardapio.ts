import { ValidationError } from '../errors/validation-error.ts';
import { Refeicao, RefeicaoTipo } from './refeicao.ts';

export interface CardapioProps {
    id?: number;
    data: Date | string;
    favorito: boolean;
    refeicoes: Refeicao[];
}

export class Cardapio {
    private readonly props: CardapioProps;

    constructor(props: CardapioProps) {
        this.validaRefeicoes(props.refeicoes);

        this.props = props;
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get data(): Date | string {
        return this.props.data;
    }

    get favorito(): boolean {
        return this.props.favorito;
    }

    get refeicoes(): Refeicao[] {
        return this.props.refeicoes;
    }

    set id(id: number | undefined) {
        this.props.id = id;
    }

    set data(data: Date | string) {
        this.props.data = data;
    }

    set favorito(favorito: boolean) {
        this.props.favorito = favorito;
    }

    set refeicoes(refeicoes: Refeicao[]) {
        this.validaRefeicoes(refeicoes);

        this.props.refeicoes = refeicoes;
    }

    private validaRefeicoes(refeicoes: Refeicao[]) {
        let tipos: RefeicaoTipo[] = [];
        
        refeicoes.map((refeicao) => {
            if (tipos.includes(refeicao.tipo)) {
                throw new ValidationError('Só é permitido adicionar um tipo de refeição por cardápio!');
            }

            tipos.push(refeicao.tipo);
        });
    }
}
