const express = require('express');
const router = new express.Router();
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')
const MentorController = require('../controllers/MentorController')


router.post('/login',LoginController.login);
router.post('/user/save',UserController.saveUser);
router.post('/mentor/save',MentorController.saveMentor);
router.get('/mentor/getList',MentorController.getList);
router.post('/mentor/getMentor',MentorController.getMentor);

module.exports = router ;