import { Cardapio } from '../../domain/entities/cardapio.ts';
import { RefeicaoItem } from '../../domain/entities/refeicao-item.ts';
import { Refeicao } from '../../domain/entities/refeicao.ts';
import { CardapioRepository } from '../../domain/repositories/cardapio-repository.ts';
import { CardapioInput } from '../dtos/criar-cardapio-dto.ts';

export class CriarCardapioUseCase {
    private cardapioRepository: CardapioRepository;

    constructor(cardapioRepository: CardapioRepository) {
        this.cardapioRepository = cardapioRepository;
    }

    public async execute(input: CardapioInput): Promise<Cardapio | null> {
        const refeicoes = input.refeicoes.map((refeicao) => {
            const itens = refeicao.itens.map((item) => {
                return new RefeicaoItem(item);
            });

            return new Refeicao({
                tipo: refeicao.tipo,
                itens: itens,
            });
        });

        const cardapio = new Cardapio({
            data: input.data,
            favorito: input.favorito,
            refeicoes: refeicoes,
        });

        const cardapioId = await this.cardapioRepository.insert(cardapio);

        return await this.cardapioRepository.find(cardapioId);
    }
}
