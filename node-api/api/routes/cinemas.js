const cinemas = require('../controllers/Cinemas');
const express = require('express');
const router = express.Router();

router.get('/', cinemas.getCinemas);

module.exports = router;