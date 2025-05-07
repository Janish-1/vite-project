import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { setCookie } from '../utils/cookieUtils';
import { setLocal } from '../utils/storageUtils';
import { useNavigate } from 'react-router-dom';

export default function WelcomeModal() {
  const { userName, setUserName, setTheme } = useContext(AppContext);
  const [name, setName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [show, setShow] = useState(!userName);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim()) return;
    setCookie('userName', name);
    setUserName(name);
    setTheme(selectedTheme);
    setLocal('theme', selectedTheme);
    setShow(false);
    navigate('/dashboard');
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("/person-writing-on-paper.jpg")`
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md text-gray-900 dark:text-white z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome!</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Jane Doe"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="theme" className="block text-sm font-medium mb-1">
            Choose Theme
          </label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
        >
          Start Building
        </button>
      </div>
    </div>
  );
}
