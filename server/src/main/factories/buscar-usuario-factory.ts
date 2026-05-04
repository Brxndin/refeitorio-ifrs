import { BuscarUsuarioUseCase } from '../../application/use-cases/buscar-usuario-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexUsuarioRepository } from '../../infrastructure/repositories/knex-usuario-repository.ts';
import { BuscarUsuarioController } from '../../presentation/controllers/buscar-usuario-controller.ts';

export const MakeBuscarUsuarioController = (): BuscarUsuarioController => {
    const repository = new KnexUsuarioRepository(db);
    const useCase = new BuscarUsuarioUseCase(repository);

    return new BuscarUsuarioController(useCase);
};
