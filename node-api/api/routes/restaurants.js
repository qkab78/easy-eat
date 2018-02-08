const restaurants = require('../controllers/Restaurants');
const express = require('express');
const router = express.Router();

router.get('/', restaurants.getRestaurants);

module.exports = router;