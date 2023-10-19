import { Router } from "express";
import { categoriaController, crudController } from "../controllers";
import swaggerJSDoc from "swagger-jsdoc";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listado de todo los productos.
 */

const router = Router();

//listado de productos
router.get('/', crudController.getAllCrud);
/**
 * @swagger
 * /categorias/:nombre:
 *   get:
 *     summary: Esta lista la categoria existente por nombre de la tabla categoria y pasarle en el metodo post al registrar el producto.
 */
router.get('/categorias/:nombre', categoriaController.getByName);
/**
 * @swagger
 * /:
 *   post:
 *     summary: Este es la ruta para registrar el producto y su categoria.
 */
router.post('/',crudController.create);
/**
 * @swagger
 * /:id:
 *   patch:
 *     summary: Este es la ruta para actualizar datos con algunos parametros.
 */
router.patch('/:id',crudController.update);
/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: Este es la ruta para eliminar producto con su idproducto.
 */
router.delete('/:id',crudController.delete);

export default router;

