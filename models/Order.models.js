const { DataTypes, NUMBER } = require('sequelize');
const db = require('../config/db');

const Order = db.define('order', {
    code_O: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    address_O: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_E: {
        type: DataTypes.INTEGER({length:10}),
    },
    username_C: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description_O: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    quantity_O: {
        type: DataTypes.INTEGER({length: 5}),
        allowNull: false
    },
    total_O: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Order;