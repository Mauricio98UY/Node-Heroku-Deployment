 import express from "express";
 import morgan from "morgan";
 import cors from "cors";
 import init from "./database.js";
 import herramientasRoute from "./src/routes/herramientas.route.js";
 import clientesRoute from "./src/routes/clientes.route.js";
 import compras_x_herramientasRoute from "./src/routes/compras_x_herramientas.route.js";
 import comprasRoute from "./src/routes/compras.route.js";
 import usuariosRoute from "./src/routes/usuarios.route.js";

 init();
 const app = express();

 app.use(morgan("dev"));
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(cors({ origin: "*" }));

 app.use("/herramienta", herramientasRoute);
 app.use("/cliente", clientesRoute);
 app.use("/compraherramienta", compras_x_herramientasRoute);
 app.use("/compra", comprasRoute);
 app.use("/usuario", usuariosRoute);

 app.set("port", 3001);
 app.listen(app.get("port"), () => {
    console.log(`servidor escuchando por el puerto' ${app.get("port")}`);
  });