const cinemas = require('../controllers/Cinemas');
const express = require('express');
const router = express.Router();

router.get('/', cinemas.getCinemas);
router.get('/:id/detail', cinemas.getCinemaInfo);

module.exports = router;