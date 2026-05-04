import dayjs from 'dayjs';
import { Cardapio } from '../../domain/entities/cardapio.ts';

export class CardapioPresenter {
    static toJson(cardapio: Cardapio | null): object | null {
        if (!cardapio) {
            return null;
        }

        return {
            id: cardapio.id,
            data: dayjs(cardapio.data).format('YYYY-MM-DD'),
            favorito: !!cardapio.favorito,
            refeicoes: cardapio.refeicoes.map((refeicao) => ({
                tipo: refeicao.tipo,
                itens: refeicao.itens.map((item) => item.nome),
            })),
        };
    }
}
