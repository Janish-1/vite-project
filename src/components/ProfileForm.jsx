import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { setLocal } from '../utils/storageUtils';
import { stripQuotes } from '../utils/stripQuotes';

export default function ProfileForm({ onSave, onCancel, showButtons = true }) {
  const {
    userName, bio, setBio,
    skills, setSkills,
    projects, setProjects,
    education, setEducation,
    website, setWebsite,
    location, setLocation,
    experience, setExperience,
    linkedIn, setLinkedIn,
    gitHub, setGitHub,
    portfolio, setPortfolio,
    certifications, setCertifications,
    languages, setLanguages
  } = useContext(AppContext);

  // Initialize state with data from localStorage or fall back to context default values
  const [newBio, setNewBio] = useState(localStorage.getItem('bio') || bio);
  const [newSkills, setNewSkills] = useState(localStorage.getItem('skills') || skills.join(', '));
  const [newProjects, setNewProjects] = useState(localStorage.getItem('projects') || projects);
  const [newEducation, setNewEducation] = useState(localStorage.getItem('education') || education);
  const [newWebsite, setNewWebsite] = useState(localStorage.getItem('website') || website);
  const [newLocation, setNewLocation] = useState(localStorage.getItem('location') || location);
  const [newExperience, setNewExperience] = useState(localStorage.getItem('experience') || experience);
  const [newLinkedIn, setNewLinkedIn] = useState(localStorage.getItem('linkedin') || linkedIn);
  const [newGitHub, setNewGitHub] = useState(localStorage.getItem('github') || gitHub);
  const [newPortfolio, setNewPortfolio] = useState(localStorage.getItem('portfolio') || portfolio);
  const [newCertifications, setNewCertifications] = useState(localStorage.getItem('certifications') || certifications);
  const [newLanguages, setNewLanguages] = useState(localStorage.getItem('languages') || languages);

  const handleSave = () => {
    // Update context state with new values
    setBio(newBio);
    setSkills(newSkills.split(',').map(skill => skill.trim()));
    setProjects(newProjects);
    setEducation(newEducation);
    setWebsite(newWebsite);
    setLocation(newLocation);
    setExperience(newExperience);
    setLinkedIn(newLinkedIn);
    setGitHub(newGitHub);
    setPortfolio(newPortfolio);
    setCertifications(newCertifications);
    setLanguages(newLanguages);

    // Save data to localStorage as well
    setLocal('bio', newBio);
    setLocal('skills', newSkills.split(',').map(skill => skill.trim()));
    setLocal('projects', newProjects);
    setLocal('education', newEducation);
    setLocal('website', newWebsite);
    setLocal('location', newLocation);
    setLocal('experience', newExperience);
    setLocal('linkedin', newLinkedIn);
    setLocal('github', newGitHub);
    setLocal('portfolio', newPortfolio);
    setLocal('certifications', newCertifications);
    setLocal('languages', newLanguages);

    if (onSave) onSave(); // Callback after saving
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center">Edit Profile</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-white-700">Name</label>
        <p className="text-lg font-medium text-white-900">{userName}</p>
      </div>

      {/* Bio and Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white-700">Bio</label>
          <textarea
            value={newBio}
            onChange={e => setNewBio(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">Skills</label>
          <input
            value={newSkills}
            onChange={e => setNewSkills(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Location & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white-700">Location</label>
          <input
            value={newLocation}
            onChange={e => setNewLocation(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">Experience</label>
          <textarea
            value={newExperience}
            onChange={e => setNewExperience(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Projects, Education, Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white-700">Education</label>
          <textarea
            value={newEducation}
            onChange={e => setNewEducation(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">Website</label>
          <input
            value={newWebsite}
            onChange={e => setNewWebsite(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* LinkedIn, GitHub, Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-white-700">LinkedIn</label>
          <input
            value={newLinkedIn}
            onChange={e => setNewLinkedIn(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">GitHub</label>
          <input
            value={newGitHub}
            onChange={e => setNewGitHub(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">Portfolio</label>
          <input
            value={newPortfolio}
            onChange={e => setNewPortfolio(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Certifications & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white-700">Certifications</label>
          <textarea
            value={newCertifications}
            onChange={e => setNewCertifications(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white-700">Languages</label>
          <input
            value={newLanguages}
            onChange={e => setNewLanguages(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Save/Cancel Buttons */}
      {showButtons && (
        <div className="flex justify-end space-x-4 mt-6">
          <button onClick={onCancel} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Save
          </button>
        </div>
      )}
    </div>
  );
}
