const { DataTypes} = require('sequelize');
const db = require('../config/db');
const Order = require('./NewOrder.models');
const Sauces = require('./Sauces.models');

const OrderS = db.define('OrderS',{
    orderId:{
        type: DataTypes.INTEGER({length:10}),
        references: {
            model: Order,
            key: 'codeO'
        }
    },
    saucesId:{
        type: DataTypes.INTEGER({length:10}),
        references:{
            model: Sauces,
            key: 'code'
        }
    }
},{
    timestamps: false
});

module.exports = OrderS;