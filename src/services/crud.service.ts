import { CrudModel } from "../models";

export const crudService = {
  getAll: async () => {
    return await CrudModel.find();
  },

  create: async (entity: { nombre: string, precio: number, promocion: boolean, imagen: string, categoria: string }) => {
    return await CrudModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await CrudModel.findByIdAndUpdate(id, body);
  },

  delete: async (id: string) => {
    return await CrudModel.findByIdAndDelete(id);
  },
};
