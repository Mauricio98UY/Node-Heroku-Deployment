import { Sequelize, Model, DataTypes } from 'sequelize';
import ClientesModel from '../models/clientes.model.js';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const Cliente_EmpresaModel = sequelize.define('Cliente_Empresa', {
    id: { 
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    razon_social: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre_comercial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName: 'Cliente_Empresa', timestamps: false});

Cliente_EmpresaModel.belongsTo(ClientesModel,{foreignKey:{name:"id_cliente"}});
export default Cliente_EmpresaModel;