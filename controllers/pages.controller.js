const Saucer = require('../models/Saucer.models');

exports.homePage = (req, res) => {
    res.render('home');
}

exports.aboutPage = (req, res) => {
    res.render('about');
}

exports.menuPage = async (req, res) => {
    const sauces = await Saucer.findAll();
    res.render('menu', {
        sauces
    });
}

exports.signUp = (req, res) => {
    res.render('signup', {
        errors: []
    });
}

exports.logIn = (req, res) => {
    res.render('login', {
        message: req.session.successMessage
    });
}

exports.notFoundPage = (req, res) => {
    res.render('notFound');
}
