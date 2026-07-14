const { getCurrentWeather, getForecast } = require('../services/weatherService');
const SearchHistory = require('../models/SearchHistory');

// GET /api/weather?city=Delhi
const getWeather = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ success: false, message: 'City name is required' });
    }

    // Fetch from OpenWeatherMap
    const data = await getCurrentWeather(city);

    // Save search to MongoDB
    await SearchHistory.create({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
    });

    // Send clean response
    res.status(200).json({
      success: true,
      data: {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind_speed: data.wind.speed,
      },
    });
  } catch (err) {
    // If city not found, OpenWeatherMap returns 404
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ success: false, message: 'City not found' });
    }
    next(err); // Pass other errors to error handler
  }
};

// GET /api/forecast?city=Delhi
const getForecastData = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ success: false, message: 'City name is required' });
    }

    const data = await getForecast(city);

    // Format: return one entry per day (every 8th item = 24 hours apart)
    const dailyForecast = data.list.filter((_, index) => index % 8 === 0).map((item) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      description: item.weather[0].description,
      humidity: item.main.humidity,
    }));

    res.status(200).json({
      success: true,
      city: data.city.name,
      country: data.city.country,
      forecast: dailyForecast,
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ success: false, message: 'City not found' });
    }
    next(err);
  }
};

module.exports = { getWeather, getForecastData };
