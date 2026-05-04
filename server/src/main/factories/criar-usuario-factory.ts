import { CriarUsuarioUseCase } from '../../application/use-cases/criar-usuario-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexUsuarioRepository } from '../../infrastructure/repositories/knex-usuario-repository.ts';
import { CriarUsuarioController } from '../../presentation/controllers/criar-usuario-controller.ts';

export const MakeCriarUsuarioController = (): CriarUsuarioController => {
    const repository = new KnexUsuarioRepository(db);
    const useCase = new CriarUsuarioUseCase(repository);

    return new CriarUsuarioController(useCase);
};
