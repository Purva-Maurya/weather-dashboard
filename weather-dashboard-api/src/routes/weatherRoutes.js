const express = require('express');
const router = express.Router();
const { getWeather, getForecastData } = require('../controllers/weatherController');
const { weatherLimiter } = require('../ratelimiter');

//Applying strict limiter only on weather endpoints
router.get('/weather', weatherLimiter, getWeather);
router.get('/forecast', weatherLimiter, getForecastData);

// GET /api/weather?city=Delhi
router.get('/weather', getWeather);

// GET /api/forecast?city=Delhi
router.get('/forecast', getForecastData);

module.exports = router;
