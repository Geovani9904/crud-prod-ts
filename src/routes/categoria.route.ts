import { Router } from "express";
import { categoriaController } from "../controllers";

const router = Router();

/**
 * @swagger
 * /crud/categoria   "/":
 *   get:
 *     summary: categoria.route.ts
 *     description: Este es la ruta para listar categoria.
 */
router.get('/', categoriaController.getAllCategorias);
/**
 * @swagger
 * /crud/categoria/    "/":
 *   post:
 *     summary: categoria.route.ts post
 *     description: Este es la ruta para registrar categoria.
 */
router.post('/',categoriaController.create);
/**
 * @swagger
 * /crud/categoria ":id":
 *   patch:
 *     summary: categoria.route.ts post
 *     description: Este es la ruta para registrar las categorias de manera independiente.
 */
router.patch('/:id',categoriaController.update);
/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: categoria.route.ts
 *     description: Este es la ruta para listar categoria.
 */
router.delete('/:id',categoriaController.delete);

export default router;

