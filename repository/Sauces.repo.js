const Sauces = require('../models/Sauces.models');

exports.getAllSauces = async () => {
    return await Sauces.findAll();
};

exports.getSauceById = async id => {
    return await Sauces.findByPk(id);
};

exports.createSauce = async sauce => {
    return Sauces.create(sauce);
};

exports.updateSauce = async (id, updatedSauce) => {
    const sauce = await Sauces.findByPk(id);

    sauce.name = updatedSauce.name;
    sauce.description = updatedSauce.description;

    await sauce.save();
};

exports.increaseExistence = async (id, amount) => {
    const ext = await Sauces.findByPk(id);

    ext.existence = ext.existence + amount;

    await ext.save();
};

exports.deleteSauce = async code => {
    return await Sauces.destroy({
        where: {
            code
        },
    });
};
