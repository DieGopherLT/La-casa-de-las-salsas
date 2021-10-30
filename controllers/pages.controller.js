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
    const message = req.flash('success');
    const error = req.flash('error');
    const loginData = req.session.login;

    const username = loginData ? loginData.username : '';
    const password = loginData ? loginData.password : '';

    req.session.login = null;
    res.render('login', {
        message,
        error,
        username,
        password
    });
}

exports.notFoundPage = (req, res) => {
    res.render('notFound');
}
