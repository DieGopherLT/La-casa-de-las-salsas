const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
    userID: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true,
    },
    name_User: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    address_User: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    user_Phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    type_User: {
        type: DataTypes.INTEGER({length:5}),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: {
            msg: "Ese usuario ya existe"
        }
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: false,
});