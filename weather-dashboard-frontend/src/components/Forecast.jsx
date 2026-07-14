import { motion } from "framer-motion";
import {
    FaSun,
    FaCloud,
    FaCloudRain,
    FaBolt,
    FaSnowflake
} from "react-icons/fa";

function Forecast({ forecast }) {



    if (!forecast) return null;
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

        <div className="max-w-5xl mx-auto mt-10">

            <h2 className="text-white text-3xl font-bold text-center mb-6">
                5 Day Forecast
            </h2>


            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">


                {forecast.map((day, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1
                        }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-white text-center">


                        <p className="font-bold">
                            {day.date}
                        </p>


                        <div className="text-4xl my-3 text-yellow-300 flex justify-center">
                            {getWeatherIcon(day.description)}
                        </div>


                        <p className="text-2xl">
                            {day.temperature}°C
                        </p>


                        <p className="capitalize text-sm">
                            {day.description}
                        </p>


                    </motion.div>

                ))}


            </div>

        </div>

    );
}


export default Forecast;