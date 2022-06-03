import { Router } from "express";
import comprasCtrl from "../controllers/compras.controller.js";
const route = Router();

route.get("/compras/:num", comprasCtrl.buscarCompra);
route.post("/compras", comprasCtrl.agregarCompra );//

export default route;