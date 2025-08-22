import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CRM = () => {
  const navigate = useNavigate();

  const backgroundOverlay = {
    background:
      'linear-gradient(to right, rgba(17,17,17,0.96), rgba(28,28,28,0.96))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const sectionDesigns = [
    {
      gradient: 'linear-gradient(135deg, #2c2c2c, #1c1c1c)',
      border: '2px dashed #a08b4d',
      hover: '#a08b4d',
    },
    {
      gradient: 'linear-gradient(135deg, #1c1c1c, #000)',
      border: '2px solid #8e773e',
      hover: '#8e773e',
    },
    {
      gradient: 'radial-gradient(circle at top left, #333, #1c1c1c)',
      border: '2px dotted #bfa76a',
      hover: '#bfa76a',
    },
    {
      gradient: 'linear-gradient(to right, #252525, #101010)',
      border: '2px groove #a08b4d',
      hover: '#a08b4d',
    },
    {
      gradient: 'linear-gradient(145deg, #282828, #121212)',
      border: '2px double #c6b07e',
      hover: '#c6b07e',
    },
  ];

  const sections = [
    {
      title: 'Inventory Management Made Easy',
      icon: '📦',
      content:
        'Real-time product tracking with advanced stock updates, order logs, and intuitive inventory flow. Say goodbye to stockouts.',
      items: [
        'Live Inventory Dashboard',
        'Smart Low-Stock Alerts',
        'Batch & Bulk Management',
        'Warehouse-Wise Overview',
      ],
    },
    {
      title: 'Invoice & Accounting Simplified',
      icon: '💰',
      content:
        'Effortless billing and financial control. From tax-ready invoices to deep ledger insights – all streamlined.',
      items: [
        'GST-Compliant Invoices',
        'Automated Tax Handling',
        'Real-Time Profit Reports',
        'Centralized Accounting Hub',
      ],
    },
    {
      title: 'Built-in Payment Gateway',
      icon: '💳',
      content:
        'Accept payments swiftly with built-in integrations. Secure, fast, and user-friendly checkout experience.',
      items: [
        'Instant Payment Notifications',
        'Multiple Payment Integrations',
        'Customer Auto-Reminders',
        'Secure End-to-End Encryption',
      ],
    },
    {
      title: 'Website & User Behavior Analytics',
      icon: '📈',
      content:
        'Empowered by real-time analytics. Know your audience, their source, and what converts best.',
      items: [
        'Behavior Heatmaps',
        'Geo-Tracking',
        'Bounce Rate Monitoring',
        'Traffic Flow Charts',
      ],
    },
    {
      title: 'Smart Social Media Publishing',
      icon: '📱',
      content:
        'Plan, schedule, and publish on social with one click. Analyze performance without leaving the CRM.',
      items: [
        'Unified Social Scheduler',
        'Cross-Platform Publishing',
        'Calendar-Driven Planning',
        'Reach & Engagement Insights',
      ],
    },
  ];

  return (
    <>
      <Navbar showMiniNav={true} />

      <Box sx={{ ...backgroundOverlay, color: '#fff', fontFamily: 'Poppins, sans-serif', py: { xs: 10, md: 20 } }}>
        <Container>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={1}>
  <Box
    sx={{
      backgroundImage: 'url(/crmbg.webp)', // Replace with your actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 4,
      px: { xs: 4, md: 10 },
      py: { xs: 8, md: 12 },
      boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
      textAlign: 'center',
      backdropFilter: 'blur(2px)',
      filter: 'brightness(40%)', // dim the background
      zIndex: 1,
    }}
  >
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontWeight: 700,
        color: '#a08b4d',
        fontFamily: 'Playfair Display, serif',
        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        filter: 'brightness(170%)', 
      }}
    >
      Empower Your Business with Our Elegant CRM Suite
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        mt: 5,
        fontSize: '1.05rem',
        color: '#eee',
        textShadow: '0 1px 4px rgba(0,0,0,0.6)',
        filter: 'brightness(200%)', 
        fontFamily: 'Poppins,sans-serif',
      }}
    >
      The BRANDBURST presents a luxurious, powerful, and beautifully designed CRM solution for modern businesses.
    </Typography>
  </Box>

  <Box sx={{ textAlign: 'center', mt: 6 }}>
    <Button
      variant="outlined"
      onClick={() => navigate('/contact')}
      sx={{
        color: '#a08b4d',
        borderColor: '#a08b4d',
        px: 4,
        py: 1.5,
        fontWeight: 500,
        borderRadius: '50px',
        fontSize: '1.05rem',
        boxShadow: '0 4px 12px rgba(160,139,77,0.5)',
        '&:hover': {
          backgroundColor: '#a08b4d',
          color: '#fff',
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      Talk to an Expert
    </Button>
  </Box>
</motion.div>


          {/* Unique, full-width, stacked feature blocks */}
          <Box sx={{ mt: 10 }}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={index + 2}
              >
                <Paper
                  elevation={8}
                  sx={{
                    width: '110%',
                    mb: 6,
                    ml:-15,
                    px: { xs: 2, md: 8 },
                    py: { xs: 5, md: 7 },
                    borderRadius: 6,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: `linear-gradient(120deg, ${index % 2 === 0 ? '#191919 60%, #232323 100%' : '#232323 60%, #191919 100%'})`,
                    boxShadow: `0 8px 40px 0 rgba(${index % 2 === 0 ? '160,139,77,0.10' : '77,139,160,0.10'})`,
                    borderLeft: index % 2 === 0 ? '8px solid #a08b4d' : 'none',
                    borderRight: index % 2 !== 0 ? '8px solid #8e773e' : 'none',
                    transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.4s',
                    '&:hover': {
                      transform: 'scale(1.025) translateY(-6px)',
                      boxShadow: `0 16px 48px 0 rgba(${index % 2 === 0 ? '160,139,77,0.18' : '77,139,160,0.18'})`,
                    },
                    '::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: index % 2 === 0
                        ? 'radial-gradient(circle at 10% 10%, rgba(160,139,77,0.08) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 90% 10%, rgba(77,139,160,0.08) 0%, transparent 70%)',
                      zIndex: 0,
                    },
                  }}
                >
                  {/* Icon section */}
                  <Box
                    sx={{
                      flex: '0 0 auto',
                      mr: { xs: 0, md: index % 2 === 0 ? 5 : 0 },
                      ml: { xs: 0, md: index % 2 !== 0 ? 5 : 0 },
                      mb: { xs: 3, md: 0 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: index % 2 === 0 ? '#a08b4d' : '#8e773e',
                        color: '#fff',
                        width: 80,
                        height: 80,
                        fontSize: 44,
                        boxShadow: '0 4px 24px rgba(160,139,77,0.18)',
                        border: '4px solid #fffbe6',
                      }}
                    >
                      {section.icon}
                    </Avatar>
                  </Box>
                  {/* Content section */}
                  <Box sx={{ flex: 1, zIndex: 1 }}>
                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800, mb: 1, letterSpacing: 0.5, fontFamily: 'Poppins, sans-serif' }}>
                      {section.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#e7d9b7', lineHeight: 1.7, fontWeight: 400, mb: 2, fontFamily: 'Poppins, sans-serif' }}>
                      {section.content}
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, color: '#fffbe6', fontWeight: 300, fontSize: '1.08rem', mb: 0, fontFamily: 'Poppins, sans-serif' }}>
                      {section.items.map((item, i) => (
                        <li key={i} style={{ marginBottom: '8px', textShadow: '0 1px 4px rgba(160,139,77,0.10)', fontFamily: 'Poppins, sans-serif' }}>{item}</li>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>

          {/* Classy, unique, luxury-styled Why Choose Our CRM block */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={7}>
            <Box sx={{ mt: 14, mb: 10, display: 'flex', justifyContent: 'center' }}>
              <Paper
                elevation={24}
                sx={{
                  maxWidth: 900,
                  width: '100%',
                  borderRadius: 7,
                  px: { xs: 3, md: 8 },
                  py: { xs: 7, md: 8 },
                  background: 'rgba(30, 30, 30, 0.85)',
                  boxShadow: '0 12px 48px 0 rgba(160,139,77,0.22)',
                  border: '2.5px solid',
                  borderImage: 'linear-gradient(90deg, #a08b4d 0%, #fffbe6 100%) 1',
                  position: 'relative',
                  overflow: 'hidden',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png") repeat',
                    opacity: 0.08,
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #a08b4d 60%, #fffbe6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 16px 0 rgba(160,139,77,0.18)',
                      }}
                    >
                      <span style={{ fontSize: 38, color: '#232323' }}>🌟</span>
                    </Box>
                  </Box>
                  <Typography variant="h4" sx={{ color: '#fffbe6', fontWeight: 900, mb: 1, fontFamily: 'Poppins, sans-serif', letterSpacing: 1, textShadow: '0 2px 12px #a08b4d44' }}>
                    Why Choose Our CRM?
                  </Typography>
                  <Divider sx={{ my: 2, background: 'linear-gradient(90deg, #a08b4d 0%, #fffbe6 100%)', height: 3, borderRadius: 2, width: 80, mx: 'auto', boxShadow: '0 2px 8px #a08b4d33' }} />
                  <Typography variant="body1" sx={{ color: '#e7d9b7', lineHeight: 1.8, fontSize: '1.13rem', fontFamily: 'Poppins, sans-serif', fontWeight: 400, mb: 4 }}>
                    <strong>Experience business elegance and efficiency in one place.</strong><br />
                    At The BRANDBURST, we fuse technology with luxury design to create CRM experiences worth admiring.
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2,
                      justifyContent: 'center',
                      alignItems: 'start',
                      fontFamily: 'Poppins, sans-serif',
                      color: '#fffbe6',
                      fontWeight: 400,
                      fontSize: '1.08rem',
                      mb: 1,
                    }}
                  >
                    <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1, listStyle: 'none' }}>
                      <span style={{ color: '#a08b4d', fontSize: 22, marginRight: 12 }}>✔</span>Premium Look & Feel
                    </Box>
                    <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1, listStyle: 'none' }}>
                      <span style={{ color: '#a08b4d', fontSize: 22, marginRight: 12 }}>✔</span>Completely Cloud-Managed
                    </Box>
                    <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1, listStyle: 'none' }}>
                      <span style={{ color: '#a08b4d', fontSize: 22, marginRight: 12 }}>✔</span>Elite Dashboard & UI
                    </Box>
                    <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1, listStyle: 'none' }}>
                      <span style={{ color: '#a08b4d', fontSize: 22, marginRight: 12 }}>✔</span>Customizable to Your Brand’s Identity
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={8}>
            <Box sx={{ textAlign: 'center', mt: 8,mb:-7
             }}>
              <Button
                variant="contained"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: '#a08b4d',
                  color: '#fff',
                  px: 6,
                  py: 1.75,
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  borderRadius: '50px',
                  boxShadow: '0 8px 30px rgba(160,139,77,0.5)',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#8e773e',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                Schedule Your Free Demo
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default CRM;
