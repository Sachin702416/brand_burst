import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Button, Card, CardContent, Chip, Container, Avatar, Divider } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  PhoneAndroid,
  Apple,
  Code,
  Brush,
  Speed,
  Security,
  Cloud,
  Analytics,
  ArrowForward,
  CheckCircle,
  Star,
  Diamond,
  AutoAwesome,
  PlayArrow,
  Smartphone,
  Tablet,
  Laptop,
  DeveloperMode,
  BugReport,
  Storage,
  Api,
  Hexagon,
  Circle,
  Square
} from '@mui/icons-material';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Triangle } from "lucide-react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import mobile app background image
import mobapp from '../assets/mobapp.jpg';

const MobileDevelopment = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mobileServices = [
    {
      title: 'Basic Informational Apps',
      description: 'Looking to showcase your business digitally? Our informational apps are perfect for brands that want to present their services, contact details, and key highlights in a clean, user-friendly format.',
      icon: <Smartphone sx={{ fontSize: 40, color: '#a08b4d' }} />,
      color: '#a08b4d',
      gradient: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
      features: ['Clean UI/UX', 'Fast Performance', 'Easy Navigation'],
      bgPattern: 'radial-gradient(circle at 30% 70%, #a08b4d20 0%, transparent 50%), linear-gradient(45deg, rgba(160, 139, 77, 0.1) 0%, rgba(0,0,0,0.9) 100%)',
      route: '/website-development'
    },
    {
      title: 'Business Apps with Forms & Backend',
      description: 'These apps are tailored for companies that need digital solutions to manage workflows, client data, and internal processes with form-based data collection, admin panels, and a secure backend.',
      icon: <Api sx={{ fontSize: 40, color: '#8e773e' }} />,
      color: '#8e773e',
      gradient: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
      features: ['Secure Backend', 'Admin Panel', 'Data Management'],
      bgPattern: 'conic-gradient(from 45deg at 50% 50%, #8e773e20 0deg, transparent 120deg, #a08b4d20 240deg, transparent 360deg)',
      route: '/crm'
    },
    {
      title: 'E-Commerce Apps',
      description: 'Take your store online with powerful e-commerce apps that offer smooth navigation, payment integrations, and inventory management. We\'ll help you create an app your customers will love.',
      icon: <Storage sx={{ fontSize: 40, color: '#a08b4d' }} />,
      color: '#a08b4d',
      gradient: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
      features: ['Payment Integration', 'Inventory Management', 'User Reviews'],
      bgPattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(160, 139, 77, 0.1) 10px, rgba(160, 139, 77, 0.1) 20px)',
      route: '/gemservices'
    },
    {
      title: 'Appointment & Booking Apps',
      description: 'Designed for service-based industries like salons, clinics, and coaching centers, these apps make it easy for your customers to schedule appointments and make bookings in real-time.',
      icon: <Speed sx={{ fontSize: 40, color: '#8e773e' }} />,
      color: '#8e773e',
      gradient: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
      features: ['Real-time Booking', 'Calendar Integration', 'Notifications'],
      bgPattern: 'linear-gradient(135deg, #8e773e20 0%, #a08b4d20 25%, transparent 50%, #8e773e20 75%, #a08b4d20 100%)',
      route: '/mobile-development'
    },
    {
      title: 'Social/Community Apps',
      description: 'Build your own digital community with our custom social apps. Encourage user interaction, content sharing, and networking through features like user profiles, group chats, feeds, and more.',
      icon: <Cloud sx={{ fontSize: 40, color: '#a08b4d' }} />,
      color: '#a08b4d',
      gradient: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
      features: ['User Profiles', 'Group Chats', 'Content Sharing'],
      bgPattern: 'radial-gradient(circle at 70% 30%, #a08b4d20 0%, transparent 50%), linear-gradient(45deg, rgba(160, 139, 77, 0.1) 0%, rgba(0,0,0,0.8) 100%)',
      route: '/social-media'
    },
    {
      title: 'Custom AI-Powered Apps',
      description: 'We create intelligent apps that use machine learning, natural language processing, and predictive analytics to deliver smarter user experiences tailored to your users.',
      icon: <Analytics sx={{ fontSize: 40, color: '#8e773e' }} />,
      color: '#8e773e',
      gradient: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
      features: ['Machine Learning', 'Predictive Analytics', 'Smart Features'],
      bgPattern: 'conic-gradient(from 0deg at 50% 50%, #8e773e20 0deg, transparent 60deg, #a08b4d20 120deg, transparent 180deg, #8e773e20 240deg, transparent 300deg)',
      route: '/seo'
    }
  ];

  const platforms = [
    { name: 'iOS', icon: <Apple />, color: '#a08b4d', neonColor: '#a08b4d' },
    { name: 'Android', icon: <PhoneAndroid />, color: '#8e773e', neonColor: '#8e773e' },
    { name: 'Flutter', icon: <Code />, color: '#a08b4d', neonColor: '#a08b4d' },
    { name: 'React Native', icon: <DeveloperMode />, color: '#8e773e', neonColor: '#8e773e' }
  ];

  const benefits = [
    'End-to-End App Development Services',
    'Expertise in Flutter, Android & iOS Native Development',
    'Transparent pricing — Know your app development cost upfront',
    'Local team support — Find app developers near you',
    'Agile development with weekly sprints & live tracking',
    'CI/CD-based deployment & cloud infrastructure expertise',
    '40+ skilled developers, UI/UX designers, and QA engineers'
  ];

  return (
    <>
      <Navbar showMiniNav={true} />

      {/* Hero Section - Modern Split Layout */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),
            url(${mobapp})
          `,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(160, 139, 77, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(160, 139, 77, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              animation: 'pulse 6s ease-in-out infinite'
            }}
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            zIndex: 1
          }}
        >
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -6, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            zIndex: 1
          }}
        >
          
        </motion.div>

        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '40%',
            right: '10%',
            zIndex: 1
          }}
        >
        </motion.div>

        {/* Mouse-following light effect */}
        <Box
          sx={{
            position: 'absolute',
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(160, 139, 77, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'all 0.1s ease-out'
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ px: { xs: 2, md: 4 }, py: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
              >
                <Chip
                  icon={<AutoAwesome />}
                  label="PREMIUM MOBILE DEVELOPMENT"
                  sx={{
                    background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    mt: 10,
                    px: 2,
                    py: 1,
                    '& .MuiChip-icon': { color: '#fff' }
                  }}
                />
              </motion.div>

              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 50%, #a08b4d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  textAlign: 'center',
                  mb: 3,
                  textShadow: '0 8px 16px rgba(0,0,0,0.3)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em'
                }}
              >
                MOBILE APP
                <br />
                <span style={{ 
                  fontSize: '0.6em', 
                  opacity: 0.8,
                  background: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>DEVELOPMENT</span>
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  color: '#aaa',
                  fontWeight: 400,
                  mb: 8,
                  maxWidth: '800px',
                  mx: 'auto',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}
              >
                We craft exceptional mobile experiences that drive business growth and user engagement through innovative design and cutting-edge technology.
              </Typography>

              {/* Platform Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar
                        sx={{
                          width: 70,
                          height: 70,
                          mt: -7,
                          background: `linear-gradient(135deg, ${platform.color} 0%, ${platform.color}dd 100%)`,
                          border: '2px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                          cursor: 'pointer'
                        }}
                      >
                        {platform.icon}
                      </Avatar>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* Hero CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/contact')}
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                      color: '#fff',
                      px: 8,
                      py: 3,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      letterSpacing: '1px',
                      boxShadow: '0 8px 32px rgba(160, 139, 77, 0.3)',
                      border: 'none',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(160, 139, 77, 0.4)'
                      }
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderColor: '#a08b4d',
                      color: '#a08b4d',
                      px: 8,
                      py: 3,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      letterSpacing: '1px',
                      borderWidth: '2px',
                      '&:hover': {
                        borderColor: '#8e773e',
                        background: 'rgba(160, 139, 77, 0.1)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Demo
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Services Section - Compact Modern Design */}
      <Box sx={{ 
        background: 'transparent',
        py: 12,
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Playfair Display, serif',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: '#aaa',
                mb: 8,
                maxWidth: '500px',
                mx: 'auto',
                fontWeight: 400,
                fontSize: '1rem'
              }}
            >
              Transform your ideas into powerful mobile applications
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {mobileServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                                     <Box
                     onClick={() => navigate(service.route)}
                     onMouseEnter={() => setHoveredCard(index)}
                     onMouseLeave={() => setHoveredCard(null)}
                     sx={{
                       position: 'relative',
                       cursor: 'pointer',
                       transition: 'all 0.3s ease',
                       '&:hover': {
                         transform: 'translateY(-4px)'
                       }
                     }}
                   >
                    {/* Compact Service Card */}
                    <Box
                      sx={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        border: '1px solid rgba(160, 139, 77, 0.2)',
                        borderRadius: '16px',
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: service.gradient,
                          borderRadius: '16px 16px 0 0'
                        }
                      }}
                    >
                      {/* Icon Container */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2.5
                        }}
                      >
                        <Box
                          sx={{
                            background: service.gradient,
                            borderRadius: '12px',
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            boxShadow: '0 4px 12px rgba(160, 139, 77, 0.3)',
                            transition: 'all 0.3s ease',
                            ...(hoveredCard === index && {
                              transform: 'scale(1.1) rotate(5deg)',
                              boxShadow: '0 6px 20px rgba(160, 139, 77, 0.4)'
                            })
                          }}
                        >
                          {React.cloneElement(service.icon, { 
                            sx: { fontSize: 24, color: '#fff' } 
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#bbb', 
                          lineHeight: 1.6, 
                          mb: 3, 
                          fontSize: '0.9rem',
                          fontWeight: 400
                        }}
                      >
                        {service.description}
                      </Typography>
                      
                      {/* Compact Features */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{
                              background: `linear-gradient(135deg, ${service.color}10 0%, ${service.color}20 100%)`,
                              color: service.color,
                              border: `1px solid ${service.color}30`,
                              fontSize: '0.7rem',
                              fontWeight: 500,
                              height: '24px',
                              '& .MuiChip-label': {
                                px: 1.5,
                                py: 0.5
                              },
                              '&:hover': {
                                background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}30 100%)`
                              }
                            }}
                          />
                        ))}
                      </Box>

                      {/* Hover Effect Border */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          border: `2px solid transparent`,
                          borderRadius: '16px',
                          background: 'linear-gradient(145deg, rgba(160, 139, 77, 0.3), rgba(160, 139, 77, 0.1))',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          ...(hoveredCard === index && {
                            opacity: 1
                          })
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box 
        sx={{ 
          background: `
            conic-gradient(from 0deg at 50% 50%, rgba(160, 139, 77, 0.05) 0deg, transparent 60deg, rgba(160, 139, 77, 0.03) 120deg, transparent 180deg, rgba(160, 139, 77, 0.05) 240deg, transparent 300deg, rgba(160, 139, 77, 0.03) 360deg),
            linear-gradient(135deg, #111 0%, #0d0d0d 25%, #1a1a1a 50%, #0d0d0d 75%, #111 100%),
            repeating-linear-gradient(135deg, transparent, transparent 25px, rgba(160, 139, 77, 0.015) 25px, rgba(160, 139, 77, 0.015) 26px)
          `,
          backgroundSize: 'cover, cover, 50px 50px',
          py: 16 
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Playfair Display, serif',
                    mb: 5
                  }}
                >
                  Why Choose Us for Your Mobile App Development?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1.8,
                    color: '#ccc',
                    mb: 6,
                    fontWeight: 300
                  }}
                >
                  Your Vision, Our Code – Let's Build the App That Moves Your Business Forward
                </Typography>
                
                <Box sx={{ mb: 8 }}>
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <Box
                          sx={{
                            background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                            borderRadius: '50%',
                            width: 45,
                            height: 45,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 4,
                            boxShadow: '0 8px 24px rgba(160, 139, 77, 0.3)'
                          }}
                        >
                          <CheckCircle sx={{ color: '#fff', fontSize: 22 }} />
                        </Box>
                        <Typography variant="body1" sx={{ color: '#ccc', fontWeight: 400 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                    borderRadius: 8,
                    p: 6,
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 32px 80px rgba(160, 139, 77, 0.4)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Decorative Elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -20,
                      left: -20,
                      width: 80,
                      height: 80,
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '50%'
                    }}
                  />

                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 5, position: 'relative', zIndex: 2, fontFamily: 'Playfair Display, serif' }}>
                    Ready to Build Your Dream App?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 6, opacity: 0.9, position: 'relative', zIndex: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
                    From initial concept to final deployment, we work closely with you to DESIGN, DEVELOP & DELIVER your perfect mobile application.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, position: 'relative', zIndex: 2 }}>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/contact')}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: '#fff',
                        color: '#a08b4d',
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        textTransform: 'none',
                        borderRadius: 3,
                        fontSize: '1rem',
                        '&:hover': {
                          background: '#f5f5f5',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Start Project
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#fff',
                        color: '#fff',
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 3,
                        fontSize: '1rem',
                        borderWidth: '2px',
                        '&:hover': {
                          borderColor: '#fff',
                          background: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default MobileDevelopment;
