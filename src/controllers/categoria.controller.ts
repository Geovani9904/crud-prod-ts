import { Response, Request } from "express";
import { categoriaService } from "../services";

export const categoriaController = {
  getAllCategorias: async (req: Request, res: Response) => {
    try {
      const data = await categoriaService.getAll();
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  getByName: async (req: Request, res: Response) => {
    try {
      const { nombre } = req.params;
      const data = await categoriaService.getByName(nombre);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await categoriaService.create(req.body);
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
      const data = await categoriaService.update(id, req.body);
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
      const data = await categoriaService.delete(id);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
