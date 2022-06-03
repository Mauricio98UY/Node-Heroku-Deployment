//import { UsuariosModel } from "../models/usuarios.model.js";
import Usuarios from "../models/usuarios.model.js"
import jwt from "jsonwebtoken";
import message from "../utils/messages.js";
const { generalMessage } = message;

export const verificarToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return generalMessage(res, 401, "false", null, "No estas autorizado para acceder a este recurso (1)");
    }
    const token = req. headers.authorization.split(' ')[1];
    if (!token) {
        return generalMessage(res, 401, "false", null, "No estas autorizado para acceder a este recurso (2)");
    }
    jwt.verify(token, "secreta", async (error, payload) => {
        if (error) {
            return generalMessage(res, 401, "false", null, "No estas autorizado para acceder a este recurso (3)");
        }
        const { _id } = payload;
        const resp = await UsuariosModel.findById(_id);
        if (resp) {
            return generalMessage(res, 401, "false", null, "No estas autorizado para acceder a este recurso (4)");
        }
        //req.usuarioid = _id; Puede ser util a futuro
        next(); 
    });
}