import { Router } from "express";
import herramientasCtrl from "../controllers/herramientas.controller.js";
import { verificarToken } from "../middlewares/Auth.js";
const route = Router();

route.get("/herramientas/:cod", herramientasCtrl.buscarHerramienta);//
route.post("/herramientas", verificarToken, herramientasCtrl.altaHerramienta );
route.patch("/modificarHerramienta", verificarToken, herramientasCtrl.modificarHerramienta);
route.delete("/eliminarHerramienta", verificarToken, herramientasCtrl.eliminarHerramienta);

export default route;