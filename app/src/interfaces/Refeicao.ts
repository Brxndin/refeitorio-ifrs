import { TipoRefeicao } from "../enums/TipoRefeicao";

export interface Refeicao {
    tipo: TipoRefeicao;
    itens: string[];
}
