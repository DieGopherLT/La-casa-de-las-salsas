const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Saucer = db.define('saucer', {
    code_S:{
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    name_S: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    // description_S: {                     Will discuss this later
    //     type: DataTypes.STRING(500),
    //     allowNull: false
    // },
    existence_S: {
        type: DataTypes.INTEGER({length:2}),
        allowNull: false,
    },
    price_S: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    },
    image_S: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Saucer;
