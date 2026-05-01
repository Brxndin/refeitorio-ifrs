import { CriarCardapioUseCase } from '../../application/use-cases/criar-cardapio-use-case.ts';
import db from '../../infrastructure/database/config/knex.ts';
import { KnexCardapioRepository } from '../../infrastructure/repositories/knex-cardapio-repository.ts';
import { CriarCardapioController } from '../../presentation/controllers/criar-cardapio-controller.ts';

export const MakeCriarCardapioController = (): CriarCardapioController => {
    const repository = new KnexCardapioRepository(db);
    const useCase = new CriarCardapioUseCase(repository);
    
    return new CriarCardapioController(useCase);
};
