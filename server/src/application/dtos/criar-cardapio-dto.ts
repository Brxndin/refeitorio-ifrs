export interface RefeicaoItemInput {
    nome: string;
}

export interface RefeicaoInput {
    tipo: number;
    itens: RefeicaoItemInput[];
}

export interface CardapioInput {
    data: string;
    favorito: boolean;
    refeicoes: RefeicaoInput[];
}
