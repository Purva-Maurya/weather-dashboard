import LocationButton from "../components/LocationButton";
import ErrorMessage from "../components/ErrorMessage";
import Forecast from "../components/Forecast";
import Loading from "../components/Loading";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { getWeather, getForecast } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import Footer from "../components/Footer";

function Home() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleLocation = (latitude, longitude) => {

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

    };

    const handleSearch = async (city) => {

        try {

            setLoading(true);

            const result = await getWeather(city);
            const forecastResult = await getForecast(city);
            console.log("Forecast API:", forecastResult);

            setWeather(result.data);
            setForecast(forecastResult.forecast);

            setError("");

        } catch (error) {

            console.error(error);

            setWeather(null);
            setForecast(null);

            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("City not found. Please try another city.");
            }



        } finally {

            setLoading(false);

        }

    };

    const getBackground = () => {

        if (!weather) {
            return "from-sky-500 via-indigo-600 to-purple-700";
        }

        const condition = weather.description.toLowerCase();


        if (condition.includes("rain")) {
            return "from-blue-900 via-slate-700 to-gray-900";
        }


        if (condition.includes("cloud")) {
            return "from-gray-500 via-blue-600 to-slate-800";
        }


        if (condition.includes("thunder")) {
            return "from-purple-900 via-gray-900 to-black";
        }


        return "from-yellow-400 via-orange-500 to-blue-500";

    };

    return (
        <div className={`min-h-screen bg-gradient-to-br ${getBackground()} transition-all duration-1000`}>
            <Navbar />

            <SearchBar onSearch={handleSearch} />
            <LocationButton onLocation={handleLocation} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <WeatherCard weather={weather} />
                    {error && <ErrorMessage error={error} />}
                </>
            )}
            <Forecast forecast={forecast} />
            <Footer />
        </div>
    );
}



export default Home;