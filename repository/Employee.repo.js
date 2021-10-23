const Employee = require('../models/Employee.models');

exports.allEmployee = async () => {
    return await Employee.findAll();
}

exports.OneEmployee = async (id) => {
    return await Employee.findByPk(id);
}

exports.createEmployee = async (employee) => {
    return await Employee.create(employee);
}

exports.UpdateEmployee = async (id, Uemployee) => {
    const empl = await Employee.findByPk(id);
    
    empl.name_E = Uemployee.name_E;

    await empl.save();
}

exports.deleteEmployee = async (id) => {
    return await Employee.destroy({
        where: {
            id_E: id
        }
    });
}