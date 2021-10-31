const UserRepo = require('../repository/User.repo');

exports.createCustomer = async (req, res) => {
    const { name, username, address, phone, password } = req.body;
    try {
        const incomingCostumer = {
            name,
            username,
            address,
            phone,
            password
        }
        await UserRepo.CreateUser(incomingCostumer);
        req.flash('success', 'Tu cuenta ha sido creada, inicia sesión.');
        res.redirect('/iniciar-sesion');
    } catch(e) {
        req.flash('error', e.errors.map(error => error.message));
        res.render('signup', {
            name,
            username,
            address,
            phone,
            password,
            errors: req.flash('error')
        })
    }
}
