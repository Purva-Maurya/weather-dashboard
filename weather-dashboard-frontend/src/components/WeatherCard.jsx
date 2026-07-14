import {
    FaSun,
    FaCloud,
    FaCloudRain,
    FaBolt,
    FaSnowflake
} from "react-icons/fa";

import { motion } from "framer-motion";
import {
    FaTemperatureHigh,
    FaTint,
    FaWind
} from "react-icons/fa";


function WeatherCard({ weather }) {

    if (!weather) return null;
    const getWeatherIcon = (description) => {

        const condition = description.toLowerCase();

        if (condition.includes("rain")) {
            return <FaCloudRain />;
        }

        if (condition.includes("cloud")) {
            return <FaCloud />;
        }

        if (condition.includes("thunder")) {
            return <FaBolt />;
        }

        if (condition.includes("snow")) {
            return <FaSnowflake />;
        }

        return <FaSun />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
        max-w-md mx-auto mt-10
        rounded-3xl
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        text-white
        p-8
        shadow-2xl
      "
        >

            <h2 className="text-3xl font-bold text-center">
                📍 {weather.city}, {weather.country}
            </h2>


            <div className="text-center mt-6">

                <div className="text-7xl text-yellow-300 flex justify-center">
                    {getWeatherIcon(weather.description)}
                </div>

                <h1 className="text-6xl font-bold mt-4">
                    {weather.temperature}°C
                </h1>

                <p className="text-xl mt-2 capitalize">
                    {weather.description}
                </p>

            </div>


            <div className="grid grid-cols-3 gap-4 mt-8">


                <div className="text-center">
                    <FaTint className="mx-auto text-2xl" />

                    <p className="mt-2">
                        {weather.humidity}%
                    </p>

                    <small>
                        Humidity
                    </small>
                </div>



                <div className="text-center">

                    <FaWind className="mx-auto text-2xl" />

                    <p className="mt-2">
                        {weather.wind_speed}
                    </p>

                    <small>
                        Wind
                    </small>

                </div>



                <div className="text-center">

                    <FaTemperatureHigh className="mx-auto text-2xl" />

                    <p className="mt-2">
                        {weather.feels_like}°
                    </p>

                    <small>
                        Feels
                    </small>

                </div>


            </div>

        </motion.div>
    );
}


export default WeatherCard;