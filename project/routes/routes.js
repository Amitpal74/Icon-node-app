const express = require('express');
const router = new express.Router();
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')


router.post('/login',LoginController.login);
router.post('/user/save',UserController.saveUser);

module.exports = router ;