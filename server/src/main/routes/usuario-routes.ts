import { Router } from 'express';
import { ExpressAdaptRoute } from '../adapters/express-adapt-routes.ts';
import { MakeBuscarUsuariosController } from '../factories/buscar-usuarios-factory.ts';
import { MakeBuscarUsuarioController } from '../factories/buscar-usuario-factory.ts';
import { MakeCriarUsuarioController } from '../factories/criar-usuario-factory.ts';

const router = Router();

router.get('/', ExpressAdaptRoute(MakeBuscarUsuariosController()));
router.get('/:id', ExpressAdaptRoute(MakeBuscarUsuarioController()));
router.post('/', ExpressAdaptRoute(MakeCriarUsuarioController()));

export default router;
