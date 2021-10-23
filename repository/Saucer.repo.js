const Saucer = require('../models/Saucer.models');

exports.allSaucers = async () => {
    return await Saucer.findAll();
}

exports.OneSaucer = async (id) => {
    return await Saucer.findByPk(id);
}

exports.createSaucer = async(saucer) => {
    return await Saucer.create(saucer);
}

exports.UpdateSaucer = async (id, Usaucer) => {
    const saucer = await Saucer.findByPk(id);

    saucer.name_S = Usaucer.name_S;
    saucer.description_S
}

exports.MoreExistence = async (id, Num) => {
    const ext = await Saucer.findByPk(id);

    ext.existence_S = ext.existence_S + Num;
}

exports.deleteSauce = async (id) => {
    return await Saucer.destroy({
        where: {
            code_S: id
        }
    });
}