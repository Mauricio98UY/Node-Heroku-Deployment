import { Sequelize, Model, DataTypes } from 'sequelize';
import ClientesModel from '../models/clientes.model.js';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const ComprasModel = sequelize.define('Compras', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_factura: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now,
    },
},{tableName: 'Compras', timestamps: false});

ComprasModel.hasOne(ClientesModel,{foreignKey:{name:"id_cliente"}});
export default ComprasModel;