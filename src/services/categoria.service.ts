import { CategoriaModel } from "../models";

export const categoriaService = {
  getAll: async () => {
    return await CategoriaModel.find();
  },

  create: async (entity: object) => {
    return await CategoriaModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await CategoriaModel.findByIdAndUpdate(id, body);
  },

  delete: async (id: string) => {
    return await CategoriaModel.findByIdAndDelete(id);
  },

    getByName: async (nombre: string) => {
      return await CategoriaModel.findOne({ nombre }); 
  },
};
