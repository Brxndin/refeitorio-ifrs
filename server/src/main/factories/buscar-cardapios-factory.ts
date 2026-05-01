import { BuscarCardapiosUseCase } from '../../application/use-cases/buscar-cardapios-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexCardapioRepository } from '../../infrastructure/repositories/knex-cardapio-repository.ts';
import { BuscarCardapiosController } from '../../presentation/controllers/buscar-cardapios-controller.ts';

export const MakeBuscarCardapiosController = (): BuscarCardapiosController => {
    const repository = new KnexCardapioRepository(db);
    const useCase = new BuscarCardapiosUseCase(repository);

    return new BuscarCardapiosController(useCase);
};
