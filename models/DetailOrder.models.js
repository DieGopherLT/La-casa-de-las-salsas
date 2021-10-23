const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DetailOrder = db.define('detailorder', {
    code_DO: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    Stotal: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false 
    },
    saucername: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'Papa tarasca'
    },
    saucesname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    saucesQuantity: {
        type: DataTypes.INTEGER({length: 5}),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = DetailOrder;