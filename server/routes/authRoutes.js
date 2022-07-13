const express = require('express');
const middle = require('../controllers/authControllers');

const router = express.Router();

router.get('/csrf-token', middle.csrfToken);
router.post('/login', middle.login);
router.post('/logout', middle.logout);

module.exports = router;