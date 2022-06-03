import { Sequelize, Model, DataTypes } from 'sequelize';
import ComprasModel from '../models/compras.model.js';
import HerramientasModel from '../models/herramientas.model.js';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const Compras_x_HerramientasModel = sequelize.define('Compras_x_Herramientas', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    unidades: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName: 'Compras_x_Herramientas', timestamps: false});

Compras_x_HerramientasModel.hasOne(ComprasModel,{foreignKey:{name:"id_compra"}});
Compras_x_HerramientasModel.hasOne(HerramientasModel,{foreignKey:{name:"id_herramienta"}});
export default Compras_x_HerramientasModel;
