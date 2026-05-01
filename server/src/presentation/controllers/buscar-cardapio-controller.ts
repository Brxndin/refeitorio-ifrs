import { BuscarCardapioUseCase } from '../../application/use-cases/buscar-cardapio-use-case.ts';
import { ok, validaErro } from '../helpers/response-helper.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';

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
                    cardapio: cardapio,
                }
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
