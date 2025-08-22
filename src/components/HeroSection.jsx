import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../assets/herobg.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = ({ scrollToServices }) => {
  const glowRef = useRef(null);
  const heroRef = useRef(null);


  useEffect(() => {
    const glow = glowRef.current;
    const hero = heroRef.current;

    const moveGlow = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      requestAnimationFrame(() => {
        glow.style.left = `${x - 200}px`;
        glow.style.top = `${y - 200}px`;
      });
    };
    hero.addEventListener('mousemove', moveGlow);

    return () => {
      hero.removeEventListener('mousemove', moveGlow);
    };
  }, []);

  return (
    <Box
      ref={heroRef}
      sx={{
        minHeight: '60vh',
        width: '100vw',
        pt: { xs: '140px', sm: '140px' },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: 2,
      }}
    >
      {/* Cursor-following glow */}
      <Box
        ref={glowRef}
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(160, 139, 77, 0.15)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'top 0.1s ease, left 0.1s ease',
        }}
      />

      {/* Animated container */}
      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 1, mb: 10, ml: 12 }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: `'Playfair Display', serif`,
            fontWeight: 700,
            mb: 3,
            color: '#a08b4d',
            textShadow: '0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          Crafting Digital Elegance
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: `'Poppins', sans-serif`,
            color: '#ccc',
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          Experience the fusion of creativity and strategy.<br />
          We build brands that captivate and convert.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Button
            component="a"
            href="/contact"
            variant="contained"
            sx={{
              backgroundColor: '#a08b4d',
              color: '#000',
              fontWeight: 500,
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              fontFamily: `'Poppins', sans-serif`,
              '&:hover': {
                backgroundColor: '#c0a95e',
              },
            }}
          >
            Get A Response
          </Button>

          <Button
            onClick={scrollToServices} // 👈 Smooth scroll
            variant="outlined"
            sx={{
              borderColor: '#a08b4d',
              color: '#a08b4d',
              fontWeight: 500,
              px: 4,
              py: 1.5,
              fontFamily: `'Poppins', sans-serif`,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#1a1a1a',
                borderColor: '#c0a95e',
                color: '#c0a95e',
              },
            }}
          >
            Services
          </Button>
          <Button
            component="a"
            href="https://wa.me/447887146830?text=Hi%2C%20I%20would%20like%20to%20get%20a%20consultation%20regarding%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#a08b4d',
              color: '#000',
              fontWeight: 500,
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontFamily: `'Poppins', sans-serif`,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#c7b271',
                boxShadow: '0 0 10px rgba(160, 139, 77, 0.4)',
              },
            }}
          >
            Send Message
          </Button>


        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
