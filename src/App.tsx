import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { VSLPage } from './pages/VSLPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ThankYouPage } from './pages/ThankYouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<VSLPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/gracias" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;