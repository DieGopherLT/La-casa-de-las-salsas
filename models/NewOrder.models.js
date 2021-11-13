const { DataTypes } = require('sequelize');
const db = require('../config/db');


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



module.exports = Order;