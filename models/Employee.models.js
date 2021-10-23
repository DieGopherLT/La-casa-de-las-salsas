const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Employee = db.define('employee', {
    id_E: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    name_E: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    username_E: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password_E: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    employeeType: {
        type: DataTypes.INTEGER({length:1}),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Employee;