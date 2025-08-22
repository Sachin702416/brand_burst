import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LaptopMac,
  TrendingUp,
  People,
  Email,
  Edit,
  Visibility,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import servicebg from '../assets/servicebg.png'

const services = [
  {
    title: 'Website Development',
    icon: <LaptopMac fontSize="large" />,
    bg: '/Images/bg1.jpg',
    route: '/services/web-development'
  },
  {
    title: 'SEO Optimization',
    icon: <TrendingUp fontSize="large" />,
    bg: '/Images/bg2.jpg',
    route: '/services/seo-analytics'
  },
  {
    title: 'Social Media Strategy',
    icon: <People fontSize="large" />,
    bg: '/Images/bg3.jpg',
    route: '/services/social-media-management'
  },
  {
    title: 'All-in-One CRM',
    icon: <Email fontSize="large" />,
    bg: '/Images/bg4.jpg',
    route: '/services/all-in-one-crm'
  },
  {
    title: 'Mobile App Development',
    icon: <Edit fontSize="large" />,
    bg: '/Images/bg5.jpg',
    route: '/services/mobile-app-development'
  },
  {
    title: 'GeM Services',
    icon: <Visibility fontSize="large" />,
    bg: '/Images/bg6.jpg',
    route: '/services/gem-services'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ServicesWeOffer = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: `url(${servicebg})`,
         backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        py: { xs: 6, md: 12 },
        px: 2,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              color: '#fffff',
              fontFamily: `'Oswald', sans-serif`,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Services We Offer
          </Typography>
        </motion.div>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Paper
                  elevation={6}
                  onClick={() => navigate(service.route)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  sx={{
                    position: 'relative',
                    p: 4,
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      borderColor: '#a08b4d',
                      boxShadow: '0 10px 25px rgba(160, 139, 77, 0.3)',
                    },
                  }}
                >
                  {/* Smooth background image with overlay */}
                  <AnimatePresence>
                    {hoverIndex === index && (
                      <motion.div
                        key="hover-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          height: '100%',
                          width: '100%',
                          backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, 0.8),
                            rgba(0, 0, 0, 0.8)
                          ), url(${service.bg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          zIndex: 0,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Card Content */}
                  <Box sx={{ zIndex: 1, textAlign: 'center' }}>
                    <Box sx={{ color: '#a08b4d', mb: 1 }}>{service.icon}</Box>
                    <Typography variant="h7" sx={{ fontWeight: 400,fontFamily: "Montserrat", color: '#a08b4d' }}>
                      {service.title}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesWeOffer;
