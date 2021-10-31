const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Sauces = db.define('sauces',{
    Code_SL: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
    },
    name_SL: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    existence_SL: {
        type: DataTypes.INTEGER({length:2}),
        allowNull: false
    },
    description_SL: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Sauces;
