const express = require('express');
const router = express.Router();
const middle = require('../controllers/usersControllers');

router.get('/users/:id', middle.getUser);
router.post('/users/', middle.postUser);
router.put('/users/:id', middle.putUser);
router.delete('/users/:id', middle.deleteUser);

module.exports = router;