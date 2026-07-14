import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

function Footer() {
    return (
        <footer className="mt-16 bg-black/20 backdrop-blur-lg border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-8">

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-white text-center">
                    🌤 Weather Dashboard
                </h2>

                <p className="text-center text-white/70 mt-2">
                    Real-time weather updates powered by OpenWeather API
                </p>

                {/* Tech Stack */}
                <div className="flex justify-center items-center gap-6 text-3xl text-white/80 mt-6">
                    <FaReact title="React" className="hover:text-cyan-400 transition" />
                    <SiTailwindcss title="Tailwind CSS" className="hover:text-sky-400 transition" />
                    <FaNodeJs title="Node.js" className="hover:text-green-400 transition" />
                    <SiExpress title="Express.js" className="hover:text-gray-300 transition" />
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-6">
                    <a
                        href="https://github.com/YOUR_GITHUB_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition"
                    >
                        <FaGithub size={28} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-blue-400 transition"
                    >
                        <FaLinkedin size={28} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-8 pt-4">
                    <p className="text-center text-white/60 text-sm">
                        © {new Date().getFullYear()} Purva Maurya • Built with React, Express & OpenWeather API
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;