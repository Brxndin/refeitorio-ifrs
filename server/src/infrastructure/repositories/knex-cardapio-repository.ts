import { Knex } from 'knex';
import { Cardapio } from '../../domain/entities/cardapio.ts';
import { RefeicaoItem } from '../../domain/entities/refeicao-item.ts';
import { Refeicao } from '../../domain/entities/refeicao.ts';
import { CardapioRepository } from '../../domain/repositories/cardapio-repository.ts';

interface RefeicaoItemRaw {
    id: number;
    nome: string;
}

interface RefeicaoRaw {
    id: number;
    tipo: number;
    itens: RefeicaoItemRaw[] | string;
}

interface CardapioRaw {
    id: number;
    data: Date | string;
    favorito: boolean;
    refeicoes: RefeicaoRaw[] | string;
}

export class KnexCardapioRepository implements CardapioRepository {
    private readonly knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    private parseJson<T>(data: any): T[] {
        if (typeof data === 'string') {
            return JSON.parse(data)
        };

        return data || [];
    }

    private getBaseQuery() {
        const subQueryItens = (colunaRefeicaoId: string) => this.knex<RefeicaoItemRaw[]>('refeicoes_itens')
            .select(
                this.knex.raw(`JSON_ARRAYAGG(
                    JSON_OBJECT('id', refeicoes_itens.id, 'nome', refeicoes_itens.nome)
                )`)
            )
            .whereRaw(`refeicoes_itens.refeicao_id = ${colunaRefeicaoId}`);

        const subQueryRefeicoes = this.knex<RefeicaoRaw[]>('refeicoes')
            .select(
                this.knex.raw(
                    `JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', refeicoes.id, 
                            'tipo', refeicoes.tipo, 
                            'itens', (?)
                        )
                    )`, 
                    [subQueryItens('refeicoes.id')]
                )
            )
            .whereRaw('refeicoes.cardapio_id = cardapios.id');

        return this.knex<CardapioRaw[]>('cardapios')
            .select(
                'cardapios.*',
                subQueryRefeicoes.as('refeicoes')
            );
    }

    private dataMap(cardapio: CardapioRaw): Cardapio {
        return new Cardapio({
            id: cardapio.id,
            data: cardapio.data,
            favorito: cardapio.favorito,
            refeicoes: this.parseJson<RefeicaoRaw>(cardapio.refeicoes).map((refeicao) => new Refeicao({
                id: refeicao.id,
                tipo: refeicao.tipo,
                itens: this.parseJson<RefeicaoItemRaw>(refeicao.itens).map((item) => new RefeicaoItem({
                    id: item.id,
                    nome: item.nome
                }))
            })),
        })
    }

    public async get(): Promise<Cardapio[]> {
        const cardapios = await this.getBaseQuery();

        return cardapios.map((cardapio) => this.dataMap(cardapio));
    }

    public async find(id: number): Promise<Cardapio | null> {
        const cardapio = await this.getBaseQuery()
            .where('cardapios.id', id)
            .first();

        if (!cardapio) {
            return null;
        }

        return this.dataMap(cardapio);
    }

    public async insert(cardapio: Cardapio): Promise<number> {
        return await this.knex.transaction(async (trx) => {
            const [cardapioId] = await trx('cardapios').insert({
                data: cardapio.data,
                favorito: cardapio.favorito
            });

            for (const refeicao of cardapio.refeicoes) {
                const [refeicaoId] = await trx('refeicoes').insert({
                    cardapio_id: cardapioId,
                    tipo: refeicao.tipo
                });

                if (refeicao.itens && refeicao.itens.length > 0) {
                    const itensParaInserir = refeicao.itens.map(item => ({
                        refeicao_id: refeicaoId,
                        nome: item.nome
                    }));
                    
                    await trx('refeicoes_itens').insert(itensParaInserir);
                }
            }

            return cardapioId;
        });
    }

    public async update(id: number, cardapio: Cardapio): Promise<number> {
        console.log('Ainda não desenvolvido');

        return 0;
    }

    public async delete(id: number): Promise<number> {
        console.log('Ainda não desenvolvido');

        return 0;
    }
}
