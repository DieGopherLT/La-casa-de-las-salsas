const Saucer = require('../models/Saucer.models');

exports.getAllSaucers = async () => {
    return await Saucer.findAll();
};

exports.getSaucerByID = async id => {
    return await Saucer.findByPk(id);
};

exports.createSaucer = async saucer => {
    return Saucer.create(saucer);
};

exports.updateSaucer = async (id, updatedSaucer) => {
    const saucer = await Saucer.findByPk(id);

    saucer.name = updatedSaucer.name;
    saucer.description = updatedSaucer.description;

    await saucer.save();
};

exports.increaseExistence = async (id, num) => {
    const ext = await Saucer.findByPk(id);

    ext.existence = ext.existence + num;

    await ext.save();
};

exports.deleteSauce = async code => {
    return await Saucer.destroy({
        where: {
            code
        },
    });
};
