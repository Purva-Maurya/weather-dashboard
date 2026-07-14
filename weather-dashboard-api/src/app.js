const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');
const historyRoutes = require('./routes/historyRoutes');
const errorHandler = require('./middlewares/errorHandler');
const { generalLimiter } = require('./ratelimiter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(generalLimiter);


app.get('/', (req, res) => {
  res.json({ message: '🌤️ Weather Dashboard API is running!' });
});

// Routes
app.use('/api', weatherRoutes);
app.use('/api', historyRoutes);


app.use(errorHandler);

module.exports = app;
