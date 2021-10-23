const DetailOrder = require('../models/DetailOrder.models');

exports.allDetailOrders = async () => {
    return await DetailOrder.findAll();
}

exports.OneDetailOrder = async (code) => {
    return await DetailOrder.findByPk(code);
}

exports.createDetailOrder = async (detailorder) => {
    return await DetailOrder.create(detailorder);
}

exports.UpdateDetailOrder = async (id, UDetailOrder) => {
    const Dorder = await DetailOrder.findByPk(id);

    Dorder.Stotal = UDetailOrder.Stotal;
    Dorder.saurcename = UDetailOrder.saucername;
    Dorder.saucesname = UDetailOrder.saucesname;
    Dorder.saucesQuantity = UDetailOrder.saucesQuantity;

    await Dorder.save(); 
}

exports.deleteDetailOrder = async (id) => {
    return await DetailOrder.destroy({
        where: {
            code_DO: id
        }
    });
}