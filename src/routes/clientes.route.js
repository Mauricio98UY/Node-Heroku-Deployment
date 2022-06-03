import { Router } from "express";
import cliente_personaCtrl from "../controllers/cliente_persona.controller.js";
import cliente_empresaCtrl from "../controllers/cliente_empresa.controller.js";
import { verificarToken } from "../middlewares/Auth.js";
const route = Router();

route.get("/persona/:ced", cliente_personaCtrl.buscarCliente_Persona);
route.post("/persona/", cliente_personaCtrl.altaCliente_Persona );//
route.patch("/persona/:id", verificarToken, cliente_personaCtrl.modificarCliente_Persona);

route.get("/empresa/:rut", cliente_empresaCtrl.buscarCliente_Empresa);//
route.post("/empresa/", cliente_empresaCtrl.altaCliente_Empresa );//
route.patch("/empresa/:id", verificarToken, cliente_empresaCtrl.modificarCliente_Empresa);

export default route;   