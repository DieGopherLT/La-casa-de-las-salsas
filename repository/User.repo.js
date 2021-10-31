const User = require('../models/User.models');

exports.SearchAllUser = async () => {
    return await User.findAll();
}

exports.UserFindOne = async (username) => {
    return await User.findOne({
        where: {
            username: username
        }
    })
}

exports.userByUsername = async username => {
    return await User.findOne({
        where: {
            username
        }
    })
}

exports.CreateUser = async (NewUser) => {
    return await User.create(NewUser);
}

exports.UpdateUser = async (username,NewUser) => {
    const Use = await User.findOne({
        where: {
            username: username
        }
    })

    Use.name_User = NewUser.name_User;
    Use.address_User = NewUser.address_User;
    Use.user_Phone = NewUser.user_Phone;

    await Use.save();
}

exports.DeleteUser = async (username) => {
    return await Use.destroy({
        where: {
            username: username
        }
    })
}
