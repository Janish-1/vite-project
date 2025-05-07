import React, { useRef } from "react";
import Navbar from "./Navbar";
import LivePreview from "./LivePreview";
import ExportButton from "./ExportButton";

export default function ExportPreview() {
  const livePreviewRef = useRef(); // Create a ref for LivePreview

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
          Export Preview
        </h1>
        {/* Pass the ref to ExportButton */}
        <ExportButton />
        {/* Pass the ref to LivePreview */}
        <LivePreview />
      </div>
    </div>
  );
}
