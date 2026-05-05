import { RemoverUsuarioUseCase } from '../../application/use-cases/remover-usuario-use-case.ts';
import { Controller, DefaultRequest, DefaultResponse } from '../protocols/controller.ts';
import { ok, validaErro } from '../protocols/responses.ts';

export class RemoverUsuarioController implements Controller {
    private readonly useCase: RemoverUsuarioUseCase;

    constructor(useCase: RemoverUsuarioUseCase) {
        this.useCase = useCase;
    }

    async handle(request: DefaultRequest): Promise<DefaultResponse> {
        try {
            const id = request.params.id;

            await this.useCase.execute(id);

            return ok({
                message: 'Usuário removido com sucesso!',
            });
        } catch (error: any) {
            return validaErro(error);
        }
    }
}
