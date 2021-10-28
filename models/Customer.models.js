const { DataTypes } = require('sequelize');
const bcrpyt = require('bcrypt');

const db = require('../config/db');

const Customer = db.define('customer', {
    id_C: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    name_C: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    username_C: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: {
            msg: "Ese usuario ya existe"
        }
    },
    address_C: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    numberPhone_C: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    password_C: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate(user) {
            user.password_C = bcrpyt.hashSync(user.password_C, bcrpyt.genSaltSync(10));
        }
    }
});

module.exports = Customer;
