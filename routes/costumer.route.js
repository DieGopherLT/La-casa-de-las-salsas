const express = require('express');

const customerController = require('../controllers/costumer.controller');

const router = express.Router();

router.post('/crear-cuenta', customerController.createCustomer);

module.exports = router;
