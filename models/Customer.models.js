const { DataTypes } = require('sequelize');
const bycrpyt = require('bcrypt');

const db = require('../config/db');

const Customer = db.define('customer',{
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
        unique: true
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
            user.password_C = bycrpyt.hashSync(user.password_C, bycrpyt.genSaltSync(10));
        }
    }
});

module.exports = Customer;
