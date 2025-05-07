import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Cookies from 'js-cookie';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(AppContext);

  // Set theme from cookie when the component mounts
  useEffect(() => {
    const savedTheme = Cookies.get('theme') || 'dark'; // Default to 'dark' if not set in cookies
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme); // Apply theme to the document
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme', newTheme, { expires: 365 }); // Store theme in cookies for future sessions
    document.documentElement.setAttribute('data-theme', newTheme); // Apply theme to the document
  };

  return (
    <button
      onClick={toggleTheme}
      className={`border p-2 rounded transition-colors ${
        theme === 'light'
          ? 'bg-black text-white hover:bg-gray-800'
          : 'bg-white text-black hover:bg-gray-300'
      }`}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
