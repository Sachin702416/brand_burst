import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import MissionVision from './MissionVision';
import TeamSection from './TeamSection';

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: `'Poppins', sans-serif` }}>
      <Navbar showMiniNav={true} />

      <Box sx={{ px: { xs: 3, md: 10 }, py: 10, mt: '120px' }}>
        <TeamSection />
        <AboutUs />
        <MissionVision />
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutSection;
