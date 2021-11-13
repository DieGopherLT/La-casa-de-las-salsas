const { DataTypes} = require('sequelize');
const db = require('../config/db');
const Saucer = require('./Saucer.models');
const Order = require('./NewOrder.models');

const OrderP = db.define('OrderP',{
    orderId:{
        type: DataTypes.INTEGER({length:10}),
        references: {
            model: Order,
            key: 'codeO'
        }
    },
    saucerId:{
        type: DataTypes.INTEGER({length:10}),
        references:{
            model: Saucer,
            key: 'code'
        }
    }
}, {
    timestamps: false
});

module.exports = OrderP;