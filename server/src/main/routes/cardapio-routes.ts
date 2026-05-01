import { Router } from 'express';
import { ExpressAdaptRoute } from '../adapters/express-adapt-routes.ts';
import { MakeBuscarCardapioController } from '../factories/buscar-cardapio-factory.ts';
import { MakeBuscarCardapiosController } from '../factories/buscar-cardapios-factory.ts';
import { MakeCriarCardapioController } from '../factories/criar-cardapio-factory.ts';

const router = Router();

router.get('/', ExpressAdaptRoute(MakeBuscarCardapiosController()));
router.get('/:id', ExpressAdaptRoute(MakeBuscarCardapioController()));
router.post('/', ExpressAdaptRoute(MakeCriarCardapioController()));

export default router;
