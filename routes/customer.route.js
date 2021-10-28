const express = require('express');

const customerController = require('../controllers/customer.controller');

const router = express.Router();

router.post('/crear-cuenta', customerController.createCustomer);

module.exports = router;
