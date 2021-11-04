const express = require('express');

const pageController = require('../controllers/pages.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/',
    authController.noCache,
    pageController.homePage
);

router.get('/nosotros',
    authController.noCache,
    pageController.aboutPage
);

router.get('/menu',
    authController.noCache,
    authController.checkAuthentication,
    pageController.menuPage
);

router.get('/crear-cuenta',
    authController.noCache,
    pageController.signUp
);

router.get('/iniciar-sesion',
    authController.noCache,
    pageController.logIn
);

// This has always to be the last one
router.get('*', pageController.notFoundPage);

module.exports = router;
