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
        allowNull: false,
        validate: {
            len: {
                args: [10, 10],
                msg: 'La longitud del numero de teléfono no es correcta'
            },
            isNumeric: {
                msg: 'Ingrese un numero de teléfono válido'
            }
        }
    },
    level: {
        type: DataTypes.INTEGER({ length: 5 }),
        allowNull: false,
        defaultValue: 1
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: {
            msg: 'Ese usuario ya existe'
        },
        validate: {
            notContains: {
                args: ' ',
                msg: 'No se permiten espacios en el nombre de usuario'
            }
        }
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            len: {
                args: [6, 18],
                msg: 'Por favor, ingrese una contraseña de entre 6 y 18 caracteres'
            },
        }
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
