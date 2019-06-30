const express = require('express');
const router = express.Router();

router.get('/api/v1/users', require('../controllers/user/get-users'));

router.post('/api/v1/user', require('../controllers/user/create-user'));

module.exports = router;