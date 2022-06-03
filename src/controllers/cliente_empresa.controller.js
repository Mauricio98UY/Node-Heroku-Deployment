import Cliente_EmpresaModel from "../models/cliente_empresa.model.js";
import Cliente from "../models/clientes.model.js";
//import { required } from "joi";
import message from "../utils/messages.js";
const { generalMessage } = message;
const cliente_empresaCtrl = {};

cliente_empresaCtrl.buscarCliente_Empresa = async (req, res) => {
    try {
        const { rut } = req.params;
        const resp = await Cliente_EmpresaModel.findOne({where: {rut: rut}});
        generalMessage(res, 200, true, resp, "");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_empresaCtrl.altaCliente_Empresa = async (req, res) => {
    try {
        const data = req.body;
        const resp = await Cliente_EmpresaModel.findOne({where: {rut: data.rut}});
        if (resp) {
            return generalMessage(res, 404, false, "", "La Empresa ya existe.");
        }
        const cliente = await Cliente.create({celular: data.celular, email: data.email, novedades: data.novedades});
        await Cliente_EmpresaModel.create({rut: data.rut, razon_social: data.razon_social, nombre_comercial: data.nombre_comercial, id_cliente: cliente.id});
        generalMessage(res, 201, true, resp, "Empresa registrada.");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_empresaCtrl.modificarCliente_Empresa = async (req, res,) => {
    try {
        const { rut } = req.params;
        const resp = await Cliente_EmpresaModel.findOne({where: {rut: rut}});
        if (!resp) {
            return generalMessage(res, 404, false, "", "Cliente no encontrado");
        }
        await resp.updateOne(req.body);
        generalMessage(res, 200, true, resp, "Cliente actualizado");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_empresaCtrl.listar = async (req, res) => {
    try {
        const resp = await Cliente_EmpresaModel.findAll();
        generalMessage(res, 200, true, resp, "Lista de empresas");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
}

export default cliente_empresaCtrl;