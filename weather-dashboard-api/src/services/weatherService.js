const axios = require('axios');

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get current weather for a city
const getCurrentWeather = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: process.env.OPENWEATHER_API_KEY,
      units: 'metric', // Celsius — use 'imperial' for Fahrenheit
    },
  });
  return data;
};

// Get 5-day forecast for a city
const getForecast = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: process.env.OPENWEATHER_API_KEY,
      units: 'metric',
    },
  });
  return data;
};

module.exports = { getCurrentWeather, getForecast };
