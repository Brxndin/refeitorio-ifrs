import { BuscarUsuarioUseCase } from '../../application/use-cases/buscar-usuario-use-case.ts';
import { UsuarioPresenter } from '../presenters/usuario-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { ok, validaErro } from '../protocols/responses.ts';

export class BuscarUsuarioController implements Controller {
    private readonly useCase: BuscarUsuarioUseCase;

    constructor(useCase: BuscarUsuarioUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const id = request.params.id;

            const usuario = await this.useCase.execute(id);

            return ok({
                message: 'Busca realizada com sucesso!',
                data: {
                    usuario: UsuarioPresenter.toJson(usuario),
                },
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
