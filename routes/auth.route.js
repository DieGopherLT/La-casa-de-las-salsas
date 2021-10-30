const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/iniciar-sesion', authController.authenticateUser);
router.get('/cerrar-sesion', authController.logOut);

module.exports = router;
