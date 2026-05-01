import { Cardapio } from '../../domain/entities/cardapio.ts';
import { CardapioRepository } from '../../domain/repositories/cardapio-repository.ts';

export class BuscarCardapioUseCase {
    private cardapioRepository: CardapioRepository;

    constructor(cardapioRepository: CardapioRepository) {
        this.cardapioRepository = cardapioRepository;
    }

    public async execute(id: number): Promise<Cardapio | null> {
        return await this.cardapioRepository.find(id);
    }
}
