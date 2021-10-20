const express = require('express');

const pageController = require('../controllers/pages.controller');

const router = express.Router();

router.get('/', pageController.homePage);
router.get('/nosotros', pageController.aboutPage);
router.get('/menu', pageController.menuPage);

module.exports = router;
