import { motion } from "framer-motion";

function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center mt-10"
        >
            <div className="text-5xl animate-spin">
                🌍
            </div>

            <p className="mt-4 text-xl">
                Fetching weather data...
            </p>
        </motion.div>
    );
}

export default Loading;