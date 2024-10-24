const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/delete/:_id', userController.deleteUser); // Route pour supprimer un utilisateur
router.put('/reset-password/:_id', userController.resetPassword); // Route pour réinitialiser le mot de passe

module.exports = router;
