import { CriarCardapioUseCase } from '../../application/use-cases/criar-cardapio-use-case.ts';
import { CardapioPresenter } from '../presenters/cardapio-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { created, validaErro } from '../protocols/responses.ts';

export class CriarCardapioController implements Controller {
    private readonly useCase: CriarCardapioUseCase;

    constructor(useCase: CriarCardapioUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const input = {
                data: request.body.data,
                favorito: request.body.favorito,
                refeicoes: request.body.refeicoes,
            };

            const cardapio = await this.useCase.execute(input);

            return created({
                message: 'Cardápio criado com sucesso!',
                data: {
                    cardapio: CardapioPresenter.toJson(cardapio),
                }
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
