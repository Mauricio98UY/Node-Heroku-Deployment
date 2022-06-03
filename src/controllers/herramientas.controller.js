import HerramientasModel from "../models/herramientas.model.js";
//const HerramientasModel = import('Herramientas', require('../models/herramientas.model.js'));
//const HerramientasModel = require('../models/herramientas.model.js');
//const message = require('../utils/messages.js');
import message from "../utils/messages.js";
const { generalMessage } = message;
const herramientasCtrl = {};

herramientasCtrl.buscarHerramienta = async (req, res) => {
    try {
        const { cod } = req.params;
        const resp = await HerramientasModel.findOne({where: {codigo: cod}});
        generalMessage(res, 200, true, resp, ""); //200 Ok
    } catch (error) {
        generalMessage(res, 500, false, "", error.message); //500 Internal Server Error
    }
};

herramientasCtrl.altaHerramienta = async (req, res) => {
    try {
        const { cod } = req.params;
        const resp = await HerramientasModel.findOne({where: {codigo: cod}});
        if (resp) {
            return generalMessage(res, 404, false, "", "La herramienta ya existe.");
        }
        await HerramientasModel.create(data);
        generalMessage(res, 201, true, resp, "Herramienta registrada.");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

herramientasCtrl.modificarHerramienta = async (req, res) => {
    try {
        const { cod } = req.params;
        const resp = await HerramientasModel.findOne({where: {codigo: cod}});
        if (!resp) {
            return generalMessage(res, 404, false, "", "Herramienta no encontrada");
        }
        await resp.updateOne(req.body);
        generalMessage(res, 200, true, resp, "Herramienta actualizada");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

herramientasCtrl.eliminarHerramienta = async (req, res) => {
    try {
        const { cod } = req.params;
        const resp = await HerramientasModel.findOne({where: {codigo: cod}});
        if (!resp) {
            return generalMessage(res, 404, false, "", "Herramienta no encontrada");
        }
        await resp.deleteOne(req.body);
        generalMessage(res, 200, true, resp, "Herramienta eliminada");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
}

export default herramientasCtrl;
//module.exports = herramientasCtrl;