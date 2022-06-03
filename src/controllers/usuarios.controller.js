import UsuariosModel from '../models/usuarios.model.js';
//const UsuariosModel = import('Usuarios', require('../models/usuarios.model.js'));
import message from '../utils/messages.js';
//import bycript from 'byscript';
//import jwt from 'jwt';
const { generalMessage } = message;
const usuariosCtrl = {};

//Tengo que ver si hay que modificar esto mas adelante
// usuariosCtrl.register = async (req, res) => {
//     try {
//         const data = req.body;
//         const resp = await UsuariosModel.findOne({ email: data.email });
//         if (resp) {
//             return generalMessage(res, 400, false, "", "El email ya se encuentra registrado");
//         }
//         data.contrasena = await bycript(data.contrasena, 10);
//         const nuevoUsuario = await UsuariosModel.create(data);
//         const token = jwt.sign({_id: nuevoUsuario._id}, "secreta");
//         generalMessage (res, 201, true, { ...nuevoUsuario._doc, contrasena: null, token }, "Bienvenido");
//     } catch (error) {
//         generalMessage(res, 500, false, "", error.message);
//     }
// }

// usuariosCtrl.login = async (req, res) => {
//     try {
//         const data = req.body;
//         const resp = await UsuariosModel.findOne({ email: data.email, contrasena: data.contrasena });
//         if (!resp) {
//             return generalMessage(res, 400, false, "", "El email no existe");
//         }
//         const match = await bycript.compare(data.contrasena, resp.contrasena);
//         if (match) {
//             const token = jwt.sign({_id: resp._id}, "secreta");
//             return generalMessage (res, 201, true, { ...nuevoUsuario._doc, contrasena: null, token }, "Bienvenido");
//         }
//         generalMessage(res, 400, false, "", "La contraseña es incorrecta");
//     } catch (error) {
//         generalMessage(res, 500, false, "", error.message);
//     }
// }

export default usuariosCtrl;