import { CrudModel } from "../models";

export const crudService = {
  getAll: async () => {
    return await CrudModel.find();
  },

  create: async (entity: object) => {
    return await CrudModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await CrudModel.findByIdAndUpdate(id, body);
  },

  delete: async (id: string) => {
    return await CrudModel.findByIdAndDelete(id);
  },
};
