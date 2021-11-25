const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Saucer = require('./Saucer.models');
const Sauces = require('./Sauces.models');

const Order = db.define('order', {
    code: {
        type: DataTypes.INTEGER({ length: 10 }),
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    //dateO: {
//
    // }
    //hourO:{
//
    // }
    priceTotal: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
    },
}, {
    timestamps: false,
});

Order.belongsToMany(Saucer, { as: 'OrderSaucer', through: 'Order_Saucer', timestamps: false });
Saucer.belongsToMany(Saucer, { as: 'OrderSaucer', through: 'Order_Saucer', timestamps: false });

Order.belongsToMany(Sauces, { as: 'OrderSauces', through: 'Order_Sauces', timestamps: false });
Sauces.belongsToMany(Order, { as: 'OrderSauces', through: 'Order_Sauces', timestamps: false });

module.exports = Order;
