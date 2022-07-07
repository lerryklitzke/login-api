const express = require('express');
const router = express.Router();
const middle = require('../controllers/authControllers');

router.post('/login', middle.login);
router.post('/logout', middle.logout);

module.exports = router;