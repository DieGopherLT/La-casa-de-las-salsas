const Customer = require('../models/Customer.models');

exports.allCustomer = async () => {
    return await Customer.findAll();
}

exports.OneCustomer = async (id) =>{
    return await Customer.findByPk(id);
}

exports.createCustomer = async (customer) => {
    return await Customer.create(customer);
}

exports.UpdateCustomer = async (id, Ucustomer) => {
    const cust = await Customer.findByPk(id);

    cust.name_C = Ucustomer.name_C;
    cust.address_C = Ucustomer.address_C;
    cust.numberPhone_C = Ucustomer.numberPhone_C;

    await cust.save();
}

exports.deleteCustomer = async (id) => {
    return await Customer.destroy({
        where: {
            id_C: id
        }
    });
}
