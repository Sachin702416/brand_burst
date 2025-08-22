// MainRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection'
import WebsiteDevelopment from './components/WebsiteDevelopment'
import GeMServices from './components/GeMServices';
import MobileDevelopment from './components/MobileDevelopment';
import SocialMedia from './components/SocialMedia';
import CRM from './components/CRM';
import SEO from './components/SEO';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/services/web-development" element={<WebsiteDevelopment />} />
      <Route path="/services/gem-services" element={<GeMServices />} />
      <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
      <Route path="/services/social-media-management" element={<SocialMedia />} />
      <Route path="/services/all-in-one-crm" element={<CRM />} />
      <Route path="/services/seo-analytics" element={<SEO />} />
    </Routes>
  );
};

export default MainRoutes;
