import { Refeicao } from "./Refeicao";

export interface Cardapio {
    data: string;
    refeicoes: Refeicao[];
    favorito: boolean;
}
