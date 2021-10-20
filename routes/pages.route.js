const express = require('express');

const pageController = require('../controllers/pages.controller');

const router = express.Router();

router.get('/', pageController.homePage);
router.get('/nosotros', pageController.aboutPage);
router.get('/menu', pageController.menuPage);

// This has always to be the last one
router.get('*', pageController.notFoundPage);

module.exports = router;
