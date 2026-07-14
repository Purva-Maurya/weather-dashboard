import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!city.trim()) return;

        onSearch(city);
        setCity("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-10 flex gap-4"
        >
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 p-4 rounded-xl border border-slate-600 bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 rounded-xl flex items-center gap-2 transition"
            >
                <FaSearch />
                Search
            </button>
        </form>
    );
}

export default SearchBar;