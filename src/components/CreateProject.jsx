import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; // if using React Router
import Navbar from "./Navbar";

export default function CreateProject() {
    const { projects, setProjects } = useContext(AppContext);
    const navigate = useNavigate(); // Navigate after submit

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        repoLink: "",
        liveLink: "",
        previewImage: "", // Can be a URL or file base64
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "previewImage" && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, previewImage: reader.result });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { title, description, techStack, repoLink, liveLink } = formData;
        if (!title || !description || !techStack || !repoLink || !liveLink) {
            setError("All fields are required.");
            return;
        }
    
        const newProject = {
            ...formData,
            id: Date.now(),
        };
    
        const updatedProjects = [...projects, newProject];
    
        setProjects(updatedProjects); // Update context
        localStorage.setItem("projects", JSON.stringify(updatedProjects)); // 🔥 Save to localStorage
        navigate("/"); // Redirect to dashboard
    };
    
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Navbar */}
            <Navbar />

            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                        Create New Project
                    </h1>

                    {error && (
                        <div className="text-red-500 mb-4 text-center font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
                            required
                        />

                        <textarea
                            name="description"
                            placeholder="Project Description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="techStack"
                            placeholder="Tech Stack (e.g., React, Node.js)"
                            value={formData.techStack}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
                            required
                        />

                        <input
                            type="url"
                            name="repoLink"
                            placeholder="Repository Link"
                            value={formData.repoLink}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
                            required
                        />

                        <input
                            type="url"
                            name="liveLink"
                            placeholder="Live Demo Link"
                            value={formData.liveLink}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
                            required
                        />

                        <input
                            type="file"
                            name="previewImage"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full"
                        />

                        {/* Preview Image */}
                        {formData.previewImage && (
                            <div className="mt-4">
                                <p className="mb-2 font-medium">Preview:</p>
                                <img
                                    src={formData.previewImage}
                                    alt="Project Preview"
                                    className="rounded-lg max-h-64 object-contain border"
                                />
                            </div>
                        )}

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
                            >
                                Submit Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
