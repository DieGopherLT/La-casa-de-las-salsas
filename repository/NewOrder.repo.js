const Order = require('../models/NewOrder.models');

exports.allOrders = async () => {
    return await Order.findAll();
}

exports.OneOrder = async code => {
    return await Order.findByPk(code);
}

exports.createOrder = async order => {
    return  Order.create(order);
}

exports.UpdateOrder = async (id, UOrder) => {
    const order = await Order.findByPk(id);

    order.nameC = UOrder.name;
    order.addressC = UOrder.address;
    order.PriceTotal = UOrder.PriceTotal;

    await order.save();
}

exports.deleteOrder = async code => {
    return await Order.destroy({
        where: {
            code
        }
    });
}
