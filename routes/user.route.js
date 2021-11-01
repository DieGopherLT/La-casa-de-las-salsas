const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/crear-cuenta', userController.createCustomer);

module.exports = router;
