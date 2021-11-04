const passport = require('passport');

exports.authenticateUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/iniciar-sesion',
    failureFlash: true
});

exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/iniciar-sesion');
};

exports.noCache = (req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    return next();
}

exports.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('warning', 'Inicia sesión, por favor.');
    res.redirect('/iniciar-sesion');
}

exports.redirectToHomeIfAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        req.flash('warning', 'Ya iniciaste sesión, si deseas crear o iniciar sesión con otra cuenta, cierra sesión primero.');
        return res.redirect('/');
    }
    return next();
}
