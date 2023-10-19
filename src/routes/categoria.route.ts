import { Router } from "express";
import { categoriaController } from "../controllers";

const router = Router();

/**
 * @swagger
 * /api/categoria/:
 *   get:
 *     summary: Listado de toda las categorias.
 *     description: Este es para listar las categorias existentes
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/
 *          description: La ruta para listar todas las categorias
 *     responses:
 *      200:
 *        description: Lista de productos...
 *        schema:
 *        type: json
 */
router.get('/', categoriaController.getAllCategorias);
/**
 * @swagger
 * /api/categoria/:
 *   post:
 *     summary: Registro de categorias.
 *     description: Este es para registrar categorias
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/categoria/
 *          description: La ruta para registrar productos
 *     responses:
 *      200:
 *        description: Categoria registrado exitosamente
 *        schema:
 *        type: json
 */
router.post('/',categoriaController.create);
/**
 * @swagger
 * /api/categoria/:id:
 *   patch:
 *     summary: Actualizar categoria.
 *     description: Este es para actualizar algunos parametros de la tabla categoria
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/categoria/:id
 *          description: La ruta para acceder a la actualizacion de categorias
 *     responses:
 *      200:
 *        description: Categoria actualizado correctamente
 *        schema:
 *        type: json
 */
router.patch('/:id',categoriaController.update);
/**
 * @swagger
 * /api/categoria/:id:
 *   delete:
 *     summary: Eliminar categoria.
 *     description: Este es para eliminar parametros de la tabla categoria
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/categoria/:id
 *          description: La ruta para acceder a la eliminacion de categorias
 *     responses:
 *      200:
 *        description: Categoria eliminad correctamente
 *        schema:
 *        type: json
 */
router.delete('/:id',categoriaController.delete);

export default router;

