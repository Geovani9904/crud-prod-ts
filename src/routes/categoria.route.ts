import { Router } from "express";
import { categoriaController } from "../controllers";

const router = Router();

router.get('/', categoriaController.getAllCategorias);

router.post('/',categoriaController.create);

router.patch('/:id',categoriaController.update);

router.delete('/:id',categoriaController.delete);

export default router;

