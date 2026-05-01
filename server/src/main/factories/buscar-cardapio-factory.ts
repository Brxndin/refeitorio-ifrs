import { BuscarCardapioUseCase } from '../../application/use-cases/buscar-cardapio-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexCardapioRepository } from '../../infrastructure/repositories/knex-cardapio-repository.ts';
import { BuscarCardapioController } from '../../presentation/controllers/buscar-cardapio-controller.ts';

export const MakeBuscarCardapioController = (): BuscarCardapioController => {
    const repository = new KnexCardapioRepository(db);
    const useCase = new BuscarCardapioUseCase(repository);

    return new BuscarCardapioController(useCase);
};
