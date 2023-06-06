const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login);
router.get('/check-token', ensureLoggedIn, usersController.checkToken);

module.exports = router;