import { motion } from "framer-motion";

function ErrorMessage({ message }) {

    if (!message) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            max-w-md
            mx-auto
            mt-8
            bg-red-500/20
            border
            border-red-400/40
            backdrop-blur-lg
            rounded-2xl
            p-6
            text-white
            text-center
            "
        >

            <div className="text-5xl">
                ⚠️
            </div>

            <h2 className="text-2xl font-bold mt-3">
                Error
            </h2>

            <p className="mt-2">
                {message}
            </p>

        </motion.div>
    );
}

export default ErrorMessage;