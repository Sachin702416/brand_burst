import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const doorOpenVariant = {
  closed: { rotateY: 0 },
  open: {
    rotateY: 360,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const MissionVision = () => {
  const [openMission, setOpenMission] = useState(false);
  const [openVision, setOpenVision] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const knobStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#a08b4d',
    border: '2px solid #fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    zIndex: 2,
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
        minHeight: '100vh',
        mb: -40,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/src/assets/mv.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              perspective: 1500,
              height: isMobile ? '350px' : '450px',
              width: isMobile ? '100%' : '440px',
              position: 'relative',
              mx: 'auto',
              mr: 10,
            }}
          >
            {!openMission ? (
              <motion.div
                variants={doorOpenVariant}
                initial="closed"
                animate="closed"
                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenMission(true)}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #000)',
                  border: '3px solid #a08b4d',
                  boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.06), 
                              inset -2px -2px 8px rgba(0, 0, 0, 0.4), 
                              0 0 25px rgba(160,139,77,0.3)`,
                  borderRadius: '12px',
                  height: '100%',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  backgroundImage: `radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent)`,
                  transition: 'transform 0.4s ease',
                }}
              >
                {/* Right Door Knob */}
                <motion.div
                  whileHover={{ rotate: 20 }}
                  style={{ ...knobStyle, right: '-20px' }}
                />

                <Typography variant="h4" sx={{ color: '#a08b4d', fontWeight: 700, fontFamily: 'Display Playfair,serif' }}>
                  MISSION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#bbb',
                    mt: 1,
                    fontStyle: 'italic',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Tap the knob to enter
                </Typography>
              </motion.div>
            ) : (
              <motion.div
                variants={doorOpenVariant}
                initial="closed"
                animate="open"
                style={{
                  position: 'absolute',
                  background: '#111',
                  border: '2px solid #a08b4d',
                  padding: '28px',
                  borderRadius: '12px',
                  height: '100%',
                  width: '100%',
                  overflowY: 'auto',
                  color: '#ccc',
                }}
              >
                <Typography variant="h5" sx={{ color: '#a08b4d', fontWeight: 700, mb: 2, fontFamily: 'Display Playfair,serif' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontFamily: 'Poppins, sans-serif' }}>
                  At <strong style={{ color: '#a08b4d' }}>THE BRANDBURST</strong>, our mission is to empower
                  businesses through bold creativity, data-driven strategies, and innovative technology. We are
                  committed to delivering impactful digital marketing, branding, and development solutions that
                  ignite growth, elevate brand presence, and burst through the noise of competition.
                </Typography>
              </motion.div>
            )}
          </Box>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              perspective: 1500,
              height: isMobile ? '350px' : '450px',
              width: isMobile ? '100%' : '440px',
              position: 'relative',
              mx: 'auto',
            }}
          >
            {!openVision ? (
              <motion.div
                variants={doorOpenVariant}
                initial="closed"
                animate="closed"
                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: -5,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenVision(true)}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #000)',
                  border: '3px solid #a08b4d',
                  boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.06), 
                              inset -2px -2px 8px rgba(0, 0, 0, 0.4), 
                              0 0 25px rgba(160,139,77,0.3)`,
                  borderRadius: '12px',
                  height: '100%',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  backgroundImage: `radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent)`,
                  transition: 'transform 0.4s ease',
                }}
              >
                {/* Left Door Knob */}
                <motion.div
                  whileHover={{ rotate: -20 }}
                  style={{ ...knobStyle, left: '-20px' }}
                />

                <Typography variant="h4" sx={{ color: '#a08b4d', fontWeight: 700, fontFamily: 'Display Playfair,serif' }}>
                  VISION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#bbb',
                    mt: 1,
                    fontStyle: 'italic',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Tap the knob to enter
                </Typography>
              </motion.div>
            ) : (
              <motion.div
                variants={doorOpenVariant}
                initial="closed"
                animate="open"
                style={{
                  position: 'absolute',
                  background: '#111',
                  border: '2px solid #a08b4d',
                  padding: '28px',
                  borderRadius: '12px',
                  height: '100%',
                  width: '100%',
                  overflowY: 'auto',
                  color: '#ccc',
                }}
              >
                <Typography variant="h5" sx={{ color: '#a08b4d', fontWeight: 700, mb: 2, fontFamily: 'Display Playfair,serif' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontFamily: 'Poppins, sans-serif' }}>
                  To become a globally recognized creative powerhouse, shaping the future of branding and
                  digital marketing. We envision a world where every brand has the power to stand out, connect
                  deeply with audiences, and thrive through purpose-driven storytelling and smart digital
                  execution.
                </Typography>
              </motion.div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionVision;
