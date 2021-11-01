const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserRepo = require('../repository/User.repo');

passport.use(
    new LocalStrategy(
        async function(username, password, done) {
            const user = await UserRepo.userByUsername(username);
            if(!user) {
                return done(null, false, { message: 'El nombre de usuario ingresado no existe.' })
            }
            if (!user.verifyPassword(password)) {
                return done(null, false, { message: 'Contraseña incorrecta.' })
            }
            return done(null, user);
        }
    )
)

passport.serializeUser((user, callback) => callback(null, user));

passport.deserializeUser((user, callback) => callback(null, user));

module.exports = passport;
