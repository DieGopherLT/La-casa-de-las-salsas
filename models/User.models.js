const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
    UserID: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true,
    },
    Name_User: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Address_User: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    User_Phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    type_User: {
        type: DataTypes.INTEGER({length:5}),
        allowNull: false
    },
    Username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: {
            msg: "Ese usuario ya existe"
        }
    },
    Password: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: false,
});