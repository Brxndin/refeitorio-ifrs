import { BuscarUsuariosUseCase } from '../../application/use-cases/buscar-usuarios-use-case.ts';
import { UsuarioPresenter } from '../presenters/usuario-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { ok, validaErro } from '../protocols/responses.ts';

export class BuscarUsuariosController implements Controller {
    private readonly useCase: BuscarUsuariosUseCase;

    constructor(useCase: BuscarUsuariosUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const usuarios = await this.useCase.execute();

            return ok({
                message: 'Busca realizada com sucesso!',
                data: {
                    usuarios: usuarios.map((usuario) => UsuarioPresenter.toJson(usuario)),
                },
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
