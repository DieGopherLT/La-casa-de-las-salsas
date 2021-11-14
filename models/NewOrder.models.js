const { DataTypes } = require('sequelize');
const db = require('../config/db');
/*const Saucer = require('./Saucer.models');
const Sauces = require('./Sauces.models');
const OrderP = require('./받침접시-Order.models');
const OrderS = require('./소스-Order.models');*/


const Order = db.define('order',{
    codeO: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    nameC: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    addressC: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    //dateO: {
//
   // }
   //hourO:{
//
   // }
    priceTotal:{
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    }
}, {
    timestamps: false
});

/*Saucer.belongsToMany(Order, { through: OrderP });
Sauces.belongsToMany(Order, { through: OrderS });
Order.belongsToMany(Saucer, { through: OrderP });
Order.belongsToMany(Sauces, { through: OrderS });*/

module.exports = Order;