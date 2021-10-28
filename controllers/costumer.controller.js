const CostumerRepo = require('../repository/Customer.repo');

exports.createCustomer = async (req, res) => {
    const { name, username, address, phone, password } = req.body;
    try {
        const incomingCostumer = {
            name_C: name,
            username_C: username,
            address_C: address,
            numberPhone_C: phone,
            password_C: password
        }
        await CostumerRepo.createCustomer(incomingCostumer);
        res.status(201).json({
            msg: `Tu cuenta ha sido creada, puedes iniciar sesión.`,
        })
    } catch(e) {
        console.log(e);
        res.render('signup', {
            name,
            username,
            address,
            phone,
            password
        })
    }
}
