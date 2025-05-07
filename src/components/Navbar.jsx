import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cookies from "js-cookie";
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { userName, setUserName, setTheme, resetProfile } =
        useContext(AppContext);

    const handleLogout = () => {
        Cookies.remove("userName");
        Cookies.remove("theme");
        localStorage.clear();
        setUserName("");
        setTheme("light");
        resetProfile();
        window.location.reload();
    };

    if (!userName) return null;

    return (
        <nav className="w-full bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md" style={{ marginBottom:"20px" }}>
            <a href="/dashboard">
                <h1 className="text-xl font-bold">Portfolio Builder</h1>
            </a>
            <div className="relative">
                <ThemeToggle />
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
                >
                    {userName}
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg z-20 transition-opacity duration-300 opacity-100">
                          <button
                              onClick={() =>
                                  (window.location.href = "/profile")
                              } style={{ borderRadius: 0 }}
                              className="w-full px-4 py-2 text-left text-sm font-semibold bg-white dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                              Profile
                          </button>
                          <button
                              onClick={handleLogout} style={{ borderRadius: 0 }}
                              className="w-full px-4 py-2 text-left text-sm font-semibold bg-white dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                              Log out
                          </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
