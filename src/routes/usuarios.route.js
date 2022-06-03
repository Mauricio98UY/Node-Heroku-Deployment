import { Router } from "express";
import usuariosCtrl from "../controllers/usuarios.controller.js";
const route = Router();

route.post("/login", function(req, res) {usuariosCtrl.login} );//
route.post("/register", function(req, res) {usuariosCtrl.register} );//

export default route;