const Order = require('../models/Order.models');

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

    order.address_O = UOrder.address_O;
    order.description_O = UOrder.description_O;
    order.date_O = UOrder.date_O;
    order.hour_O = UOrder.hour_O;
    order.quantity_O = UOrder.quantity_O;
    order.total_O = UOrder.total_O;

    await order.save(); 
}

exports.deleteOrder = async (id) => {
    return await Order.destroy({
        where: {
            code_O: id
        }
    });
}