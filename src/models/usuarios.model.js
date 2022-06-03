import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const UsuariosModel = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName: 'Usuarios', timestamps: false});

export default UsuariosModel;