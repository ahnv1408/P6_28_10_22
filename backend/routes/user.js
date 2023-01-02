const express = require('express');
const router = express.Router();
const password = require ('../middleware/password.js');
// IMPORTATION CONTROLLERS
const userCtrl = require('../controllers/user');

// ROUTE
router.post('/signup', password, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;