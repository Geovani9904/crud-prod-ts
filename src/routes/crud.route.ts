import { Router } from "express";
import { categoriaController, crudController } from "../controllers";
import swaggerJSDoc from "swagger-jsdoc";

const router = Router();
/**
 * @swagger
 * /api/crud/:
 *   get:
 *     summary: Listado de todo los productos.
 *     description: Este es para listar todos los productos
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/
 *          description: La ruta para acceder a la ruta y listar los productos
 *     responses:
 *      200:
 *        description: Listado de todos los productos
 *        schema:
 *        type: json
 */
//listado de productos
router.get('/', crudController.getAllCrud);
/**
 * @swagger
 * /api/crud/categorias/:nombre:
 *   get:
 *     summary: Listado de las categorias existentes y asignarle al registro de productos.
 *     description: Este es para listar todos las categorias
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/categorias/:nombre
 *          description: La ruta para acceder a la ruta y listar las categorias
 *     responses:
 *      200:
 *        description: Listado de todos las categorias
 *        schema:
 *        type: json
 */
router.get('/categorias/:nombre', categoriaController.getByName);
/**
 * @swagger
 * /api/crud/:
 *   post:
 *     summary: Registro de productos.
 *     description: Este es para registrar todos los productos
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/
 *          description: La ruta para registrar productos.
 *     responses:
 *      200:
 *        description: Producto registrado
 *        schema:
 *        type: json
 */
router.post('/',crudController.create);
/**
 * @swagger
 * /api/crud/:
 *   patch:
 *     summary: Este es para actualizar productos.
 *     description: Este es para actualizar la tabla productos con algunos parametros
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/
 *          description: La ruta para actualizar productos
 *     responses:
 *      200:
 *        description: Producto actualizado
 *        schema:
 *        type: json
 */
router.patch('/:id',crudController.update);
/**
 * @swagger
 * /api/crud/:id:
 *   delete:
 *     summary: Este es para eliminar productos.
 *     description: Columna para eliminar productos
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: https://crud-prod-ts.onrender.com
 *          name: /api/crud/
 *          description: La ruta para eliminar producto
 *     responses:
 *      200:
 *        description: Producto eliminado
 *        schema:
 *        type: json
 */
router.delete('/:id',crudController.delete);

export default router;

