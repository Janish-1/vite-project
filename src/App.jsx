import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, AppContext } from './context/AppContext';

import WelcomeModal from './components/WelcomeModal';
import MainDashboard from './components/MainDashboard';
import ProfilePage from './components/ProfilePage';
import CreateProject from './components/CreateProject';
import ExportPreview from './components/ExportPreview';

function AppRoutes() {
  const { userName } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={!userName ? <WelcomeModal /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={userName ? <MainDashboard /> : <Navigate to="/" />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/export-preview" element={<ExportPreview />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
