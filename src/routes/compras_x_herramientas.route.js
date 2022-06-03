import { Router } from "express";
import compras_x_herramientasCtrl from "../controllers/compras_x_herramientas.controller.js";
const route = Router();

route.post("/compras_x_herramientas", compras_x_herramientasCtrl.agregarCompras_X_Herramientas);//

export default route;