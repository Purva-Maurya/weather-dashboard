#🌤️ Weather Dashboard API

A RESTful API built with Node.js, Express, and MongoDB that fetches real-time weather data and 5-day forecasts using the OpenWeatherMap API.

## 🛠️ Tech Stack

- **Node.js** + **Express** — server and routing
- **MongoDB** + **Mongoose** — database and ORM
- **Axios** — HTTP requests to OpenWeatherMap
- **dotenv** — environment variable management

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/weather-dashboard-api.git
cd weather-dashboard-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```
Then open `.env` and fill in your values:
- Get a free API key at https://openweathermap.org/api
- Make sure MongoDB is running locally

### 4. Start the server
```bash
npm run dev
```

Server runs at `http://localhost:3000`

---

## 📡 API Endpoints

### Weather

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/weather?city=Delhi` | Get current weather |
| GET | `/api/forecast?city=Delhi` | Get 5-day forecast |

### History

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/history` | Get last 10 searches |
| DELETE | `/api/history/:id` | Delete one record |
| DELETE | `/api/history` | Clear all history |

---

## 📋 Example Response

### GET /api/weather?city=Delhi

```json
{
  "success": true,
  "data": {
    "city": "Delhi",
    "country": "IN",
    "temperature": 32.5,
    "feels_like": 36.2,
    "humidity": 45,
    "description": "clear sky",
    "wind_speed": 4.2
  }
}
```

---

## 📁 Project Structure

```
weather-dashboard-api/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── weatherController.js
│   │   └── historyController.js
│   ├── models/
│   │   └── SearchHistory.js   # Mongoose schema
│   ├── routes/
│   │   ├── weatherRoutes.js
│   │   └── historyRoutes.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── services/
│   │   └── weatherService.js  # OpenWeatherMap API calls
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
