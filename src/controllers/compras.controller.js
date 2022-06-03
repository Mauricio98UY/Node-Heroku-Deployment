import ComprasModel from "../models/compras.model.js";
//const ComprasModel = import('Compras', require('../models/compras.model.js'));
import message from "../utils/messages.js";
const { generalMessage } = message;
const comprasCtrl = {};

comprasCtrl.buscarCompra = async (req, res) => {
    try {
        const { num } = req.params;
        const resp = await ComprasModel.findOne({where: {numero_factura: num}});
        generalMessage(res, 200, true, resp, "");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};


comprasCtrl.agregarCompra = async (req, res) => {
    try {
        const data = req.body;
        const resp = await ComprasModel.create(data);
        generalMessage(res, 201, true, resp, "Compra registrada.");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

comprasCtrl.listar = async (req, res) => {
    try {
        const resp = await ComprasModel.findAll();
        generalMessage(res, 200, true, resp, "Lista de compras");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
}

export default comprasCtrl;