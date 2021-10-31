const User = require('../models/User.models');

exports.SerchAllUser = async () => {
    return await User.findAll();
}

exports.UserFindOne = async (username) => {
    return await User.findOne({
        where: {
            Username: username
        }
    })
}

exports.CreateUser = async (NewUser) => {
    return await User.create(NewUser);
}

exports.UpdateUser = async (username,NewUser) => {
    const Use = await User.findOne({
        where: {
            username_C: username
        }
    })

    Use.Name_User = NewUser.Name_User;
    Use.Address_User = NewUser.Address_User;
    Use.User_Phone = NewUser.User_Phone;

    await Use.save();
}

exports.DeleteUser = async (username) => {
    return await Use.destroy({
        where: {
            Username: username
        }
    })
}