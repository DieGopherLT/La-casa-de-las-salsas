const passport = require('passport');

exports.authenticateUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/iniciar-sesion',
    failureFlash: true
});

exports.logOut = (req, res) => {
    req.session.destroy(() => res.redirect('/iniciar-sesion'));
};
