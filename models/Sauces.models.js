const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Order = require('./NewOrder.models');
const OrderS = require('./소스-Order.models');

const Sauces = db.define('sauces',{
    code: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    existences: {
        type: DataTypes.INTEGER({length:2}),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    timestamps: false
});

Sauces.belongsToMany(Order, { through: OrderS });

module.exports = Sauces;
