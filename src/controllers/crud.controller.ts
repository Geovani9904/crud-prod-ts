import { Response, Request } from "express";
import { crudService } from "../services";

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
      const data = await crudService.create(req.body);
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
