import { Router } from "express";

import { categoriaController, crudController } from "../controllers";

const router = Router();

router.get('/', crudController.getAllCrud);
router.get('/categorias/:nombre', categoriaController.getByName);

router.post('/',crudController.create);

router.patch('/:id',crudController.update);

router.delete('/:id',crudController.delete);

export default router;

