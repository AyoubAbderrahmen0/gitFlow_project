const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/delete/:_id', userController.deleteUser); 
router.put('/reset-password/:_id', userController.resetPassword); 

module.exports = router;
