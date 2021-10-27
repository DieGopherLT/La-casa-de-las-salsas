const Sauces = require('../models/Sauces.models');

exports.allSauces = async () => {
    return await Sauces.findAll();
}

exports.OneSauces = async (id) => {
    return await Sauces.findByPk(id);
}

exports.createSauces = async(sauces) => {
    return await Sauces.create(sauces);
}

exports.UpdateSauces = async (id, Usauces) => {
    const sauces = await Sauces.findByPk(id);

    sauces.name_SL = Usauces.name_SL;
    sauces.description_S
}

exports.MoreExistence = async (id, Num) => {
    const ext = await Sauces.findByPk(id);

    ext.existence_SL = ext.existence_SL + Num;
}

exports.deleteSauce = async (id) => {
    return await Sauces.destroy({
        where: {
            code_SL: id
        }
    });
}