import { RemoverUsuarioUseCase } from '../../application/use-cases/remover-usuario-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexUsuarioRepository } from '../../infrastructure/repositories/knex-usuario-repository.ts';
import { RemoverUsuarioController } from '../../presentation/controllers/remover-usuario-controller.ts';

export const MakeRemoverUsuarioController = (): RemoverUsuarioController => {
    const repository = new KnexUsuarioRepository(db);
    const useCase = new RemoverUsuarioUseCase(repository);

    return new RemoverUsuarioController(useCase);
};
