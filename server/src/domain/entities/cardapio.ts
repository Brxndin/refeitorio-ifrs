import { Refeicao } from './refeicao.ts';

export interface CardapioProps {
    id?: number;
    data: Date | string;
    favorito: boolean;
    refeicoes: Refeicao[];
}

export class Cardapio {
    private readonly props: CardapioProps;

    constructor(props: CardapioProps) {
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
        this.props.refeicoes = refeicoes;
    }
}
