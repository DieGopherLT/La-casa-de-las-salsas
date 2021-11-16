const Order = require('../models/NewOrder.models');

exports.allOrders = async () => {
    return await Order.findAll();
}

exports.OneOrder = async (code) => {
    return await Order.findByPk(code);
}

exports.createOrder = async (order) => {
    return await Order.create(order);
}

exports.UpdateOrder = async (id, UOrder) => {
    const order = await Order.findByPk(id);

    order.nameC = UOrder.nameC;
    order.addressC = UOrder.addressC;
    order.PriceTotal = UOrder.PriceTotal;

    await order.save(); 
}

exports.deleteOrder = async (id) => {
    return await Order.destroy({
        where: {
            code_O: id
        }
    });
}