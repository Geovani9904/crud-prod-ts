import { Router } from "express";

import { crudController } from "../controllers";

const router = Router();

router.get('/', crudController.getAllCrud);

router.post('/',crudController.create);

router.patch('/:id',crudController.update);

router.delete('/:id',crudController.delete);

export default router;

