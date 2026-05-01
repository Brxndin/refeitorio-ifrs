import { BuscarCardapiosUseCase } from '../../application/use-cases/buscar-cardapios-use-case.ts';
import { CardapioPresenter } from '../presenters/cardapio-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { ok, validaErro } from '../protocols/responses.ts';

export class BuscarCardapiosController implements Controller {
    private readonly useCase: BuscarCardapiosUseCase;

    constructor(useCase: BuscarCardapiosUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const cardapios = await this.useCase.execute();

            return ok({
                message: 'Busca realizada com sucesso!',
                data: {
                    cardapios: cardapios.map((cardapio) => CardapioPresenter.toJson(cardapio)),
                }
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
