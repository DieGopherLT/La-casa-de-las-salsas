const OrderP = require('../models/받침접시-Order.models');

exports.allPinO = async () => {
    return await OrderP.findAll();
}

exports.PinObyOrder = async (code) => {
    return await OrderP.findOne({
        where: {
            OrderId: code
        }
    })
}

exports.PinObySaucer = async (code) => {
    return await OrderP.findOne({
        where: {
            SaucerId:code
        }
    })
}