const SaucerRepo = require('../repository/Saucer.repo');

exports.homePage = (req, res) => {
    const warning = req.flash('warning');
    res.render('home', {
        warning
    });
}

exports.aboutPage = (req, res) => {
    res.render('about');
}

exports.menuPage = async (req, res) => {
    const sauces = await SaucerRepo.getAllSaucers();
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
    const warning = req.flash('warning');
    const loginData = req.session.login;

    const username = loginData ? loginData.username : '';
    const password = loginData ? loginData.password : '';

    req.session.login = null;
    res.render('login', {
        message,
        warning,
        error,
        username,
        password
    });
}

exports.notFoundPage = (req, res) => {
    res.render('notFound');
}
