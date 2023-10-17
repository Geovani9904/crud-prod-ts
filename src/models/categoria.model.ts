import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nombre: {
    type: String,
  },
});

export const CategoriaModel = model('categoria', categoriaSchema);
