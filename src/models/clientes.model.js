import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const ClientesModel = sequelize.define('Clientes', {
    id: {
        type: DataTypes.NUMBER,
        //allowNull: true,
        primaryKey: true,
        autoIncrement:true,
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subscripcion_novedades: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
},{tableName: 'Clientes', timestamps: false});

export default ClientesModel;