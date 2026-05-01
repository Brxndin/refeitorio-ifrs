import { BuscarCardapioUseCase } from '../../application/use-cases/buscar-cardapio-use-case.ts';
import { CardapioPresenter } from '../presenters/cardapio-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { ok, validaErro } from '../protocols/responses.ts';

export class BuscarCardapioController implements Controller {
    private readonly useCase: BuscarCardapioUseCase;

    constructor(useCase: BuscarCardapioUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const id = request.params.id;

            const cardapio = await this.useCase.execute(id);

            return ok({
                message: 'Busca realizada com sucesso!',
                data: {
                    cardapio: CardapioPresenter.toJson(cardapio),
                }
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
