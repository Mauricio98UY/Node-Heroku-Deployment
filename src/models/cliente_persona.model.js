import { Sequelize, Model, DataTypes } from 'sequelize';
import ClientesModel from '../models/clientes.model.js';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const Cliente_PersonaModel = sequelize.define('Cliente_Persona', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName: 'Cliente_Persona', timestamps: false});

Cliente_PersonaModel.belongsTo(ClientesModel,{foreignKey:{name:"id_cliente"}});
export default Cliente_PersonaModel;