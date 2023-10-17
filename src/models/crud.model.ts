import { Schema, model } from "mongoose";

const crudSchema = new Schema({
  nombre: {
    type: String,
  },
  precio: {
    type: Number,
  },
  promocion: {
    type: Boolean,
    default: true,
  },  
  imagen: {
    type: String,
  },
   categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categoria'
   }
});

export const CrudModel = model('crud', crudSchema);
