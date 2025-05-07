import React, { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '../utils/cookieUtils';
import { getLocal, setLocal } from '../utils/storageUtils';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme
  const [theme, setTheme] = useState('dark');
  // Profile Details
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState('');
  const [education, setEducation] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [certifications, setCertifications] = useState('');
  const [languages, setLanguages] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const storedUserName = getCookie('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        userName, setUserName,
        theme, setTheme,
        bio, setBio,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
