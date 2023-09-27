import { Schema, model } from "mongoose";

const crudSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export const CrudModel = model('crud', crudSchema);
