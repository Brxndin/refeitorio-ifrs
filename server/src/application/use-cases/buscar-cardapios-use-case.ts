import { Cardapio } from '../../domain/entities/cardapio.ts';
import { CardapioRepository } from '../../domain/repositories/cardapio-repository.ts';

export class BuscarCardapiosUseCase {
    private cardapioRepository: CardapioRepository;

    constructor(cardapioRepository: CardapioRepository) {
        this.cardapioRepository = cardapioRepository;
    }

    public async execute(): Promise<Cardapio[]> {
        return await this.cardapioRepository.get();
    }
}
