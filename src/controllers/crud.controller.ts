import { Response, Request } from "express";
import { categoriaService, crudService } from "../services";

export const crudController = {
  getAllCrud: async (req: Request, res: Response) => {
    try {
      const data = await crudService.getAll();
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { nombre, precio, promocion, imagen } = req.body;
      const categoriaNombre = req.body.categoriaNombre;

      const categoria = await categoriaService.getByName(categoriaNombre);

      if (!categoria) {
        return res.status(400).json({
          message: "La categoria no existe",
        });
      }

      const data = await crudService.create({
        nombre,
        precio,
        promocion,
        imagen,
        categoria: categoria._id,
      });

      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await crudService.update(id, req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await crudService.delete(id);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
