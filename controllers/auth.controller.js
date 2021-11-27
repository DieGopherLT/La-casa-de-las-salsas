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

exports.checkIfUserIsAdmin = (req, res, next) => {
    // Any boolean equivalence to first condition will make the app not to work.
    if (req.user === undefined || req.user.level !== 3) {
        req.flash('warning', 'No tienes permiso para ver acceder a esta parte.');
        return res.redirect('/');
    }
    return next();
}

exports.checkIfUserHasAccess = (req, res, next) => {
    // Any boolean equivalence to first condition will make the app not to work.
    if (req.user === undefined || req.user.level === 1) {
        req.flash('warning', 'No tienes permiso para acceder a esta parte');
        return res.redirect('/');
    }
    return next();
}
