const express = require('express');

const pageController = require('../controllers/pages.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/',
    pageController.homePage
);

router.get('/nosotros',
    pageController.aboutPage
);

router.get('/menu',
    authController.noCache,
    authController.checkAuthentication,
    pageController.menuPage
);

router.get('/crear-cuenta',
    authController.noCache,
    authController.redirectToHomeIfAuthenticated,
    pageController.signUp
);

router.get('/iniciar-sesion',
    authController.noCache,
    authController.redirectToHomeIfAuthenticated,
    pageController.logIn
);

router.get('/admin/empleados',
    authController.checkIfUserIsAdmin,
    pageController.renderEmployeeDashboard
);

router.get('/admin/platillos',
    authController.checkIfUserHasAccess,
    pageController.renderSaucerDashboard
);

router.get('/admin/salsas',
    authController.checkIfUserHasAccess,
    pageController.renderSauceDashboard
);

router.get('/admin/ordenes',
    authController.checkIfUserHasAccess,
    pageController.renderOrderDashboard
)

// This has always to be the last one
router.get('*', pageController.notFoundPage);

module.exports = router;
