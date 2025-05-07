import React, { useEffect, useState } from "react";
import { getLocal } from "../utils/storageUtils"; // Import the storage utility functions

export default function LivePreview() {
    // State to hold the user's data
    const [userData, setUserData] = useState({
        userName: "",
        bio: "",
        skills: [],
        projects: [],
        education: "",
        website: "",
        location: "",
        experience: "",
        linkedIn: "",
        gitHub: "",
        portfolio: "",
        certifications: "",
        languages: "",
    });

    // Load data from localStorage on component mount
    useEffect(() => {
        setUserData({
            userName: getLocal("userName") || "",
            bio: getLocal("bio") || "",
            skills: getLocal("skills") || [],
            projects: getLocal("projects") || [],
            education: getLocal("education") || "",
            website: getLocal("website") || "",
            location: getLocal("location") || "",
            experience: getLocal("experience") || "",
            linkedIn: getLocal("linkedin") || "",
            gitHub: getLocal("github") || "",
            portfolio: getLocal("portfolio") || "",
            certifications: getLocal("certifications") || "",
            languages: getLocal("languages") || "",
        });
    }, []);

    return (
      <>
        <div className="bg-white p-6 rounded-lg dark:bg-gray-800 space-y-8 max-w-4xl mx-auto exportthissection">
            {/* Display Name and Bio */}
            <div>
                <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
                    {userData.userName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {userData.bio}
                </p>
            </div>

            {/* Display Skills */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Skills
                </h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    {userData.skills.length > 0 ? (
                        userData.skills.map((skill, idx) => (
                            <li
                                key={idx}
                                className="text-gray-600 dark:text-gray-300"
                            >
                                {skill}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                            No skills added yet.
                        </p>
                    )}
                </ul>
            </div>

            {/* Display Other Information in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Education
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.education ||
                            "No education details added yet."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.website || "No website provided."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.location || "Location not specified."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.experience ||
                            "No experience details added yet."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        LinkedIn
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.linkedIn || "No LinkedIn profile provided."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        GitHub
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.gitHub || "No GitHub profile provided."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Portfolio
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.portfolio || "No portfolio provided."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Certifications
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.certifications ||
                            "No certifications provided."}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Languages
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {userData.languages || "No languages specified."}
                    </p>
                </div>
            </div>

            {/* Display Projects in a Grid */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Projects
                </h3>
                <div className="flex flex-col gap-6 mt-4">
                    {Array.isArray(userData.projects) ? (
                        userData.projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md"
                            >
                                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                                    {project.title}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    {project.description}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <strong>Tech Stack:</strong>{" "}
                                    {project.techStack}
                                </p>
                                <div className="mt-2 space-x-2">
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline text-sm"
                                    >
                                        Repo
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 underline text-sm"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                                {project.previewImage && (
                                    <img
                                        src={project.previewImage}
                                        alt="Preview"
                                        className="mt-3 rounded-lg max-h-40 object-contain border"
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                            No projects added yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
      </>
    );
}
