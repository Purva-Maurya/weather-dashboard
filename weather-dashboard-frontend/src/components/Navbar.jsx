import { FaCloudSun } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-slate-900 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <FaCloudSun className="text-3xl text-cyan-400" />
                    <h1 className="text-2xl font-bold">
                        Weather Dashboard
                    </h1>
                </div>

                <p className="text-slate-300 text-sm">
                    Live Weather Updates
                </p>

            </div>
        </nav>
    );
}

export default Navbar;