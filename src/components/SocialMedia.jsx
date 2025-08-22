import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Button, Card, CardContent, Chip, IconButton, Container, Divider, Avatar } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  People, 
  Analytics, 
  Campaign,
  ArrowForward,
  CheckCircle,
  Star,
  Diamond,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
  PlayArrow,
  AutoAwesome,
  Psychology,
  Speed,
  Visibility
} from '@mui/icons-material';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import your social media background image
import socialbg from '../assets/socialbg.jpg';

const SocialMedia = () => {
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

  const services = [
    {
      title: 'Content Strategy',
      description: 'Craft compelling content that resonates with your audience and drives engagement',
      icon: <Campaign sx={{ fontSize: 40, color: '#a08b4d' }} />,
      pattern: 'radial-gradient(circle at 30% 70%, #a08b4d 0%, transparent 50%), linear-gradient(45deg, rgba(160, 139, 77, 0.3) 0%, rgba(0,0,0,0.8) 100%)',
      features: ['Content Planning', 'Brand Voice', 'Engagement'],
      color: '#a08b4d',
      gradient: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)'
    },
    {
      title: 'Community Management',
      description: 'Build and nurture meaningful relationships with your followers',
      icon: <People sx={{ fontSize: 40, color: '#a08b4d' }} />,
      pattern: 'conic-gradient(from 45deg at 50% 50%, #a08b4d 0deg, transparent 120deg, #8e773e 240deg, transparent 360deg)',
      features: ['Response Management', 'Community Building', 'Crisis Management'],
      color: '#8e773e',
      gradient: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with data-driven insights',
      icon: <Analytics sx={{ fontSize: 40, color: '#a08b4d' }} />,
      pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(160, 139, 77, 0.1) 10px, rgba(160, 139, 77, 0.1) 20px)',
      features: ['Performance Tracking', 'ROI Analysis', 'Growth Insights'],
      color: '#a08b4d',
      gradient: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)'
    },
    {
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted social media advertising campaigns',
      icon: <TrendingUp sx={{ fontSize: 40, color: '#a08b4d' }} />,
      pattern: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 25%, transparent 50%, #a08b4d 75%, #8e773e 100%)',
      features: ['Campaign Management', 'Targeting', 'Budget Optimization'],
      color: '#8e773e',
      gradient: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)'
    }
  ];

  const benefits = [
    'Increase brand visibility and awareness',
    'Drive website traffic and conversions',
    'Build authentic customer relationships',
    'Generate leads and sales',
    'Improve customer service',
    'Gain valuable market insights'
  ];

  const platforms = [
    { name: 'Facebook', icon: <Facebook />, color: '#1877F2' },
    { name: 'Instagram', icon: <Instagram />, color: '#E4405F' },
    { name: 'Twitter', icon: <Twitter />, color: '#1DA1F2' },
    { name: 'LinkedIn', icon: <LinkedIn />, color: '#0A66C2' },
    { name: 'YouTube', icon: <YouTube />, color: '#FF0000' }
  ];

  return (
    <>
      <Navbar showMiniNav={true} />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(17, 17, 17, 0.85) 0%, rgba(26, 26, 26, 0.8) 50%, rgba(45, 45, 45, 0.85) 100%), url(${socialbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
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
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            zIndex: 1
          }}
        >
          <Diamond sx={{ fontSize: 80, color: 'rgba(160, 139, 77, 0.4)' }} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '65%',
            right: '12%',
            zIndex: 1
          }}
        >
          <Star sx={{ fontSize: 60, color: 'rgba(160, 139, 77, 0.5)' }} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '35%',
            right: '20%',
            zIndex: 1
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 70, color: 'rgba(160, 139, 77, 0.3)' }} />
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
                  label="Premium Social Media Solutions"
                  sx={{
                    background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
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
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 50%, #a08b4d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  textAlign: 'center',
                  mb: 3,
                  textShadow: '0 8px 16px rgba(0,0,0,0.3)',
                  lineHeight: 1.1
                }}
              >
                Social Media Management
                <br />
                <span style={{ fontSize: '0.8em', opacity: 0.9 }}>Marketing Excellence</span>
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  color: '#ccc',
                  fontWeight: 300,
                  mb: 6,
                  mt: -5,
                  fontSize: { xs: '2rem', md: '1.2rem' },
                  maxWidth: '900px',
                  mx: 'auto',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  lineHeight: 1.4
                }}
              >
                Transform your brand's digital presence<br/> with strategic social media marketing that drives real results
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
                          width: 60,
                          height: 60,
                          background: `linear-gradient(135deg, ${platform.color} 0%, ${platform.color}dd 100%)`,
                          border: '2px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
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
                      px: 6,
                      py: 2.5,
                      fontWeight: 700,
                      textTransform: 'none',
                      borderRadius: 4,
                      fontSize: '1.2rem',
                      boxShadow: '0 12px 40px rgba(160, 139, 77, 0.4)',
                      border: '2px solid rgba(255,255,255,0.1)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #8e773e 0%, #a08b4d 100%)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 50px rgba(160, 139, 77, 0.5)'
                      }
                    }}
                  >
                    Start Your Journey
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderColor: '#a08b4d',
                      color: '#a08b4d',
                      px: 6,
                      py: 2.5,
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 4,
                      fontSize: '1.2rem',
                      borderWidth: '2px',
                      '&:hover': {
                        borderColor: '#8e773e',
                        background: 'rgba(160, 139, 77, 0.1)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ 
        background: `
          radial-gradient(circle at 30% 30%, rgba(160, 139, 77, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(160, 139, 77, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #111 25%, #1a1a1a 50%, #111 75%, #0a0a0a 100%),
          repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(160, 139, 77, 0.02) 40px, rgba(160, 139, 77, 0.02) 41px)
        `,
        backgroundSize: 'cover, cover, cover, 80px 80px',
        py: 16,
        position: 'relative'
      }}>
        {/* Section Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '6px',
            background: 'linear-gradient(90deg, transparent, #a08b4d, transparent)',
            borderRadius: '3px'
          }}
        />

        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #a08b4d 0%, #8e773e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Playfair Display, serif',
                mb: 3
              }}
            >
              Our Premium Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: '#ccc',
                mb: 10,
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 300
              }}
            >
              Comprehensive social media solutions tailored to elevate your business presence
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    sx={{
                      height: '700px',
                      width: '500px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 6,
                      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-16px) scale(1.02)',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                        borderColor: service.color
                      }
                    }}
                  >
                    {/* Service Pattern Background */}
                    <Box
                      sx={{
                        height: 250,
                        background: service.pattern,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                          transition: 'all 0.3s ease'
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `radial-gradient(circle at 50% 50%, ${service.color}20 0%, transparent 70%)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:hover::after': {
                          opacity: 1
                        }
                      }}
                    />
                    
                    <CardContent sx={{ p: 5, textAlign: 'center', position: 'relative' }}>
                      <motion.div
                        animate={{ 
                          scale: hoveredCard === index ? 1.3 : 1,
                          rotate: hoveredCard === index ? 15 : 0
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Box
                          sx={{
                            
                            borderRadius: '50%',
                            width: 80,
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            boxShadow: '0 8px 24px rgba(160, 139, 77, 0.3)'
                          }}
                        >
                          {service.icon}
                        </Box>
                      </motion.div>
                      
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#fff',
                          mb: 3,
                          fontFamily: 'Playfair Display, serif'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: '#ccc', lineHeight: 1.7, mb: 4, fontSize: '1rem' }}
                      >
                        {service.description}
                      </Typography>
                      
                      {/* Service Features */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {service.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="medium"
                            sx={{
                              background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}25 100%)`,
                              color: service.color,
                              border: `1px solid ${service.color}40`,
                              fontSize: '0.85rem',
                              fontWeight: 500,
                              '&:hover': {
                                background: `linear-gradient(135deg, ${service.color}25 0%, ${service.color}35 100%)`
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Content Section */}
      <Box 
        sx={{ 
          background: `
            conic-gradient(from 0deg at 50% 50%, rgba(160, 139, 77, 0.05) 0deg, transparent 60deg, rgba(160, 139, 77, 0.03) 120deg, transparent 180deg, rgba(160, 139, 77, 0.05) 240deg, transparent 300deg, rgba(160, 139, 77, 0.03) 360deg),
            linear-gradient(135deg, #111 0%, #0d0d0d 25%, #1a1a1a 50%, #0d0d0d 75%, #111 100%),
            repeating-linear-gradient(135deg, transparent, transparent 25px, rgba(160, 139, 77, 0.015) 25px, rgba(160, 139, 77, 0.015) 26px)
          `,
          backgroundSize: 'cover, cover, 50px 50px',
          backgroundPosition: 'center',
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
                  Why Social Media Marketing Matters
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
                  Social media marketing is essential for modern businesses. With billions of active users across platforms, it offers unparalleled opportunities to connect with your target audience, build brand awareness, and drive meaningful engagement.
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
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 4,
                            boxShadow: '0 8px 24px rgba(160, 139, 77, 0.3)'
                          }}
                        >
                          <CheckCircle sx={{ color: '#fff', fontSize: 24 }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: '#ccc', fontWeight: 500 }}>
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
                    p: 8,
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
                      top: -40,
                      right: -40,
                      width: 160,
                      height: 160,
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -30,
                      left: -30,
                      width: 120,
                      height: 120,
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '50%'
                    }}
                  />

                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 5, position: 'relative', zIndex: 2, fontFamily: 'Playfair Display, serif' }}>
                    Ready to Transform Your Social Media Presence?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 8, opacity: 0.9, position: 'relative', zIndex: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Let's create a strategic social media marketing plan that drives real results for your business and elevates your brand to new heights.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, position: 'relative', zIndex: 2 }}>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/contact')}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: '#fff',
                        color: '#a08b4d',
                        px: 5,
                        py: 2,
                        fontWeight: 700,
                        textTransform: 'none',
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: '#f5f5f5',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Get Started Today
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#fff',
                        color: '#fff',
                        px: 5,
                        py: 2,
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 3,
                        fontSize: '1.1rem',
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

export default SocialMedia;
