import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize(process.env.DB_NAME__, process.env.USER__, process.env.DB_PASSWORD__, {
    host: process.env.HOST__,
    port: process.env.PORT__,
    dialect: 'mysql',
});

const HerramientasModel = sequelize.define('Herramientas', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    participa_en_promocion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
},{tableName: 'Herramientas', timestamps: false});

export default HerramientasModel;