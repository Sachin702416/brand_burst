import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedClients from './components/TrustedClients';
import WelcomeSection from './components/WelcomeSection';
import { Box } from '@mui/material';
import ServicesWeOffer from './components/ServicesWeOffer';
import DigitalMarketingBenefits from './components/DigitalMarketingBenefits';
import VideoSection from './components/VideoSection';
import MobileAppServicesShowcase from './components/MobileAppServicesShowcase';
import FAQSection from './components/FAQsection';
import Footer from './components/Footer'

const App = () => {
  const [showMiniNav, setShowMiniNav] = useState(true);
  const trustedRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If it intersects, hide mini navbar
        setShowMiniNav(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-120px 0px 0px 0px', // offset equal to navbar height
      }
    );

    if (trustedRef.current) {
      observer.observe(trustedRef.current);
    }

    return () => {
      if (trustedRef.current) {
        observer.unobserve(trustedRef.current);
      }
    };
  }, []);

  return (
    <Box
  sx={{
    width: '100%',
    overflowX: 'hidden',       // prevents horizontal scroll
    backgroundColor: '#000',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#a08b4d',
      borderRadius: '6px',
    },
  }}
>

      <Navbar showMiniNav={showMiniNav} />
      <HeroSection scrollToServices={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <DigitalMarketingBenefits />
      <Box ref={trustedRef}>
        <TrustedClients />
      </Box>
      <WelcomeSection />
      <div ref={servicesRef}>
        <ServicesWeOffer />
      </div>
      <VideoSection />
      <MobileAppServicesShowcase />
      <FAQSection />
      <Footer />
    </Box>
  );
};

export default App;
