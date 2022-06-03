import Compras_X_HerramientasModel from "../models/compras_x_herramientas.model.js";
//const Compras_X_HerramientasModel = import('Compras_x_Herramientas', require('../models/compras_x_herramientas.model.js'));
import message from "../utils/messages.js";
const { generalMessage } = message;
const compras_x_herramientasCtrl = {};

compras_x_herramientasCtrl.agregarCompras_X_Herramientas = async (req, res) => {
    try {
        const data = req.body;
        const resp = await Compras_X_HerramientasModel.create(data);
        generalMessage(res, 201, true, resp, "");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

compras_x_herramientasCtrl.listar = async (req, res) => {
    try {
        const resp = await Compras_X_HerramientasModel.findAll();
        generalMessage(res, 200, true, resp, "Lista de herramientas");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
}

export default compras_x_herramientasCtrl;