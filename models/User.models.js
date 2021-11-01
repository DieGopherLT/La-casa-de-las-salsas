const { DataTypes } = require('sequelize');
const bcrpyt = require('bcrypt');

const db = require('../config/db');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER({length:10}),
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    userLevel: {
        type: DataTypes.INTEGER({length:5}),
        allowNull: false,
        defaultValue: 1
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: {
            msg: "Ese usuario ya existe"
        }
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate(user) {
            user.password = bcrpyt.hashSync(user.password, bcrpyt.genSaltSync(10));
        }
    }
});

User.prototype.verifyPassword = function(password) {
    return bcrpyt.compareSync(password, this.password);
}

module.exports = User;
