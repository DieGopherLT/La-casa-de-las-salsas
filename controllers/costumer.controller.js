const CostumerRepo = require('../repository/Customer.repo');

exports.createCustomer = async (req, res) => {
    try {
        const { name, username, address, phone, password } = req.body;
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
        res.status(500).json({
            msg: 'Algo salió mal, por favor, vuelve a intentarlo.'
        })
    }
}
