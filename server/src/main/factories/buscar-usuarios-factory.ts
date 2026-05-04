import { BuscarUsuariosUseCase } from '../../application/use-cases/buscar-usuarios-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexUsuarioRepository } from '../../infrastructure/repositories/knex-usuario-repository.ts';
import { BuscarUsuariosController } from '../../presentation/controllers/buscar-usuarios-controller.ts';

export const MakeBuscarUsuariosController = (): BuscarUsuariosController => {
    const repository = new KnexUsuarioRepository(db);
    const useCase = new BuscarUsuariosUseCase(repository);

    return new BuscarUsuariosController(useCase);
};
