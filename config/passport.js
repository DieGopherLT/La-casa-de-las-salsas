const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const CustomerRepo = require('../repository/Customer.repo');

passport.use(
    new LocalStrategy(
        async function(username, password, done) {
            const customer = await CustomerRepo.customerByUsername(username);
            if(!customer) {
                return done(null, false, { message: 'El nombre de usuario ingresado no existe.' })
            }
            if (!customer.verifyPassword(password)) {
                return done(null, false, { message: 'Contraseña incorrecta.' })
            }
            return done(null, customer);
        }
    )
)

passport.serializeUser((user, callback) => callback(null, user));

passport.deserializeUser((user, callback) => callback(null, user));

module.exports = passport;
