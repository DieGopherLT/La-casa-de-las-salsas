const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Saucer = db.define('saucer', {
    code:{
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    // description_S: {                     Will discuss this later
    //     type: DataTypes.STRING(500),
    //     allowNull: false
    // },
    existence: {
        type: DataTypes.INTEGER({length:2}),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false
    },
    imagePath: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
});



module.exports = Saucer;
