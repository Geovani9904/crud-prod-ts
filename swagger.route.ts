import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


const router = Router();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Usando swagger",
      description: "Este es una practica de de API con swagger",
      contact: {
        name: "Gio",
        url: "https://swagger.io/docs/",
      },
      servers: ["http://localhost:8000"],
    },
  },
  basePath: "/apis",

  apis: ["./src/routes/crud.route.ts", "./src/routes/categoria.route.ts", "./src/server.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use("/apis", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export default router;
