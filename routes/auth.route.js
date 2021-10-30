const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/iniciar-sesion', 
    (req, res, next) => {
        req.session.login = {
            username: req.body.username,
            password: req.body.password
        }
        next();
    },
    authController.authenticateUser
);
router.get('/cerrar-sesion', authController.logOut);

module.exports = router;
