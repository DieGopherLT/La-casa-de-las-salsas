const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Sauces = db.define('sauces',{
    codeS: {
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



module.exports = Sauces;
