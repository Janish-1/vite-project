import React, { useContext } from "react";
import ExportButton from "./ExportButton";
import Navbar from "./Navbar";
import { AppContext } from "../context/AppContext";

export default function MainDashboard() {
    const { userName } = useContext(AppContext);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Navbar */}
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Welcome Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                        Welcome back, {userName}!
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Here's a snapshot of your current progress.
                    </p>
                </div>

                {/* Main Grid Content */}
                <div className="flex flex-col gap-8">
                    {/* Add New Project + Export Section */}
                    <div className="flex gap-6 justify-between">
                          {/* Add New Project Card */}
                          <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
                              <h2 className="text-xl font-medium mb-4">
                                  Want to start something new?
                              </h2>
                              <button
                                  className="bg-green-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-green-700 transition"
                                  onClick={() =>
                                      (window.location.href =
                                          "/create-project")
                                  }
                              >
                                  Add New Project
                              </button>
                          </div>

                          {/* Export Section Card */}
                          <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
                              <h2 className="text-xl font-medium mb-4">
                                  Export Your Work
                              </h2>
                              <button
                                  className="bg-green-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-green-700 transition"
                                  onClick={() =>
                                      (window.location.href =
                                          "/export-preview")
                                  }
                              >
                                  Export
                              </button>
                          </div>
                    </div>
                    <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl font-medium mb-4">
                            Want to see your Export Preview?
                        </h2>
                        <button
                            className="bg-green-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-green-700 transition"
                            onClick={() =>
                                (window.location.href =
                                    "/export-preview")
                            }
                        >
                            Export Preview
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
