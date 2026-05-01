import type { Cardapio } from '../entities/cardapio.ts';

export interface CardapioRepository {
    get(): Promise<Cardapio[]>;
    find(id: number): Promise<Cardapio | null>;
    insert(cardapio: Cardapio): Promise<number>;
    update(id: number, cardapio: Cardapio): Promise<number>;
    delete(id: number): Promise<number>;
}
