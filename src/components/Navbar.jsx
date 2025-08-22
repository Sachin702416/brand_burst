import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const navItems = ['Home', 'Services', 'About', 'Contact'];
const navIcons = {
  Home: <HomeIcon sx={{ fontSize: '1.0rem', color: '#a08b4d' }} />,
  Services: <WorkIcon sx={{ fontSize: '1.0rem', color: '#a08b4d' }} />,
  About: <BookIcon sx={{ fontSize: '1.0rem', color: '#a08b4d' }} />,
  Contact: <PhoneIcon sx={{ fontSize: '1.0rem', color: '#a08b4d' }} />,
};

const serviceOptions = [
  'All-In-One CRM',
  'GeM Services',
  'Web Development',
  'Social Media Management',
  'SEO & Analytics',
  'Mobile App Development',
];

const Navbar = ({ showMiniNav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 2, position: 'relative' }}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 4}
        sx={{
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid #a08b4d',
          boxShadow: scrolled ? '0 6px 30px rgba(160, 139, 77, 0.5)' : '0 4px 20px #a08b4d',
          width: '100%',
          height: '120px',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <AnimatePresence>
          <motion.div
            key="mini-navbar"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: showMiniNav ? 1 : 0, y: showMiniNav ? 0 : -50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', stiffness: 60, damping: 16, mass: 0.6 }}
            style={{ pointerEvents: showMiniNav ? 'auto' : 'none', position: 'relative' }}
          >
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                px: { xs: 2, md: 10 },
                minHeight: '32px !important',
                borderBottom: '1px solid #222',
                mt: '-4px',
              }}
            >
              <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.75rem', fontFamily: 'Poppins, sans-serif' }}>
                <EmailIcon sx={{ fontSize: '1rem', mr: 1, mb: -0.5, color: '#a08b4d' }} />
                vini@thebrandburst.com
                <PhoneIcon sx={{ fontSize: '1rem', ml: 2, mr: 1, mb: -0.5, color: '#a08b4d' }} />
                +44 7887146830
                <LanguageIcon sx={{ fontSize: '1rem', ml: 3, mr: 1, mb: -0.5, color: '#a08b4d' }} />
                www.thebrandburst.com
              </Typography>

              <Box display="flex" gap={2}>
                <Typography fontSize={'11px'}>Follow Us :</Typography>
                <a
                  href="https://www.instagram.com/the.brandburst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <InstagramIcon sx={{ fontSize: '1rem', cursor: 'pointer', color: '#a08b4d' }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/the-brandburst-ltd-166b0b377/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <LinkedInIcon sx={{ fontSize: '1rem', cursor: 'pointer', color: '#a08b4d' }} />
                </a>
              </Box>
            </Toolbar>
          </motion.div>
        </AnimatePresence>

        <motion.div animate={{ y: showMiniNav ? 0 : -20 }} transition={{ type: 'spring', stiffness: 60, damping: 16 }}>
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 10 } }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '75px',
                padding: '10px',
                objectFit: 'contain',
                transform: 'scale(1.8)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.8)')}
            />

            <Box display="flex" gap={4}>
              {navItems.map((item, idx) =>
                item === 'Services' ? (
                  <Box
                    key={idx}
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                    sx={{ position: 'relative' }}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotateZ: 1 }}>
                      <Button
                        sx={{
                          color: '#fff',
                          fontWeight: 400,
                          px: 3,
                          py: 1.5,
                          fontSize: '0.8rem',
                          fontFamily: `'Poppins', sans-serif`,
                          textTransform: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          '&:hover': { color: '#a08b4d' },
                        }}
                      >
                        {navIcons[item]}
                        {item}
                      </Button>
                    </motion.div>

                    {/* Card-Style Dropdown */}
                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '-60px',
                            background: 'rgba(0, 0, 0, 0.95)',
                            padding: '20px',
                            borderRadius: '12px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '16px',
                            zIndex: 9999,
                            boxShadow: '0 8px 20px rgba(160,139,77,0.5)',
                          }}
                        >
                          {serviceOptions.map((service, index) => (
                            <Link
                              to={`/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                              key={index}
                              style={{ textDecoration: 'none' }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                  padding: '12px 16px',
                                  background: '#1a1a1a',
                                  color: '#fff',
                                  borderRadius: '10px',
                                  fontFamily: 'Poppins, sans-serif',
                                  fontSize: '0.85rem',
                                  border: '1px solid #a08b4d',
                                  boxShadow: '0 2px 10px rgba(160,139,77,0.2)',
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                {service}
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                ) : (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotateZ: 1 }}
                  >
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                      <Button
                        sx={{
                          color: '#fff',
                          fontWeight: 400,
                          px: 3,
                          py: 1.5,
                          fontSize: '0.8rem',
                          fontFamily: `'Poppins', sans-serif`,
                          textTransform: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          '&:hover': { color: '#a08b4d' },
                        }}
                      >
                        {navIcons[item]}
                        {item}
                      </Button>
                    </Link>
                  </motion.div>
                )
              )}

            </Box>
          </Toolbar>
        </motion.div>
      </AppBar>
    </Box>
  );
};

export default Navbar;
