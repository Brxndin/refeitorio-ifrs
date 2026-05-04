import { CriarUsuarioUseCase } from '../../application/use-cases/criar-usuario-use-case.ts';
import { UsuarioPresenter } from '../presenters/usuario-presenter.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { created, validaErro } from '../protocols/responses.ts';

export class CriarUsuarioController implements Controller {
    private readonly useCase: CriarUsuarioUseCase;

    constructor(useCase: CriarUsuarioUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const input = {
                nome: request.body.nome,
                tipo: request.body.tipo,
                email: request.body.email,
                senha: request.body.senha,
            };

            const usuario = await this.useCase.execute(input);

            return created({
                message: 'Usuário criado com sucesso!',
                data: {
                    usuario: UsuarioPresenter.toJson(usuario),
                },
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
