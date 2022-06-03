import Cliente_PersonaModel from "../models/cliente_persona.model.js";
import Cliente from "../models/clientes.model.js";
//const Cliente_PersonaModel = import('Cliente_Persona', require('../models/cliente_persona.model.js'));
import message from "../utils/messages.js";
const { generalMessage } = message;
const cliente_personaCtrl = {};

cliente_personaCtrl.buscarCliente_Persona = async (req, res) => {
    try {
        const { ced } = req.params;
        const resp = await Cliente_PersonaModel.findOne({where: {cedula: ced}});
        generalMessage(res, 200, true, resp, "");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_personaCtrl.altaCliente_Persona = async (req, res) => {
    try {
        const data = req.body;
        const resp = await Cliente_PersonaModel.findOne({where: {cedula: data.cedula}});
        if (resp) {
            return generalMessage(res, 404, false, "", "La persona ya existe.");
        }
        const cliente = await Cliente.create({celular: data.celular, email: data.email, novedades: data.novedades});
        await Cliente_PersonaModel.create({cedula: data.cedula, nombre: data.nombre, apellido: data.apellido, id_cliente: cliente.id});
        generalMessage(res, 201, true, resp, "Persona registrada.");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_personaCtrl.modificarCliente_Persona = async (req, res) => {
    try {
        const { ced } = req.params;
        const resp = await Cliente_PersonaModel.findOne({where: {cedula: ced}});
        if (!resp) {
            return generalMessage(res, 404, false, "", "Cliente no encontrado");
        }
        await resp.updateOne(req.body);
        generalMessage(res, 200, true, resp, "Cliente actualizado");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
};

cliente_personaCtrl.listar = async (req, res) => {
    try {
        const resp = await Cliente_PersonaModel.findAll();
        generalMessage(res, 200, true, resp, "Lista de personas");
    } catch (error) {
        generalMessage(res, 500, false, "", error.message);
    }
}

export default cliente_personaCtrl;