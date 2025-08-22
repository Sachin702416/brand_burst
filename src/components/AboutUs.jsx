import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const title = 'About Us';

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, md: 0 },
        py: 10,
      }}
    >
      {/* Background Blur Layer (optional 3D Canvas section skipped for simplicity) */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50px',
          left: 0,
          width: '100%',
          height: '120%',
          zIndex: 1,
          opacity: 0.2,
          filter: 'blur(4px)',
        }}
      />

      {/* Foreground Content */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 120 }}
        style={{ zIndex: 2, width: '100%', maxWidth: '850px' }}
      >
        <Paper
          elevation={10}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(160,139,77,0.3)',
            borderRadius: '20px',
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 6 },
            color: '#ccc',
            textAlign: 'center',
            boxShadow: '0 0 25px rgba(160,139,77,0.1)',
            fontFamily: `'Poppins', sans-serif`,
            transition: 'all 0.4s ease',
            '&:hover': {
              boxShadow: '0 0 35px rgba(160,139,77,0.2)',
              borderColor: 'rgba(160,139,77,0.6)',
            },
          }}
        >
          {/* Title with letter hover effect */}
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6px',
              color: '#a08b4d',
              fontWeight: 700,
              fontFamily: `'Playfair Display', serif`,
              mb: 3,
              textShadow: '0 0 8px rgba(160,139,77,0.2)',
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            {title.split('').map((letter, idx) => (
              <motion.span
                key={idx}
                whileHover={{
                  y: -8,
                  color: '#ffffff',
                  textShadow: '0 0 8px rgba(255,255,255,0.6)',
                  scale: 1.2,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </Typography>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontFamily: 'Poppins, sans-serif',
                color: '#ccc',
                transition: 'all 0.3s ease',
              }}
            >
              At <strong style={{ color: '#a08b4d' }}>The BrandBurst</strong>, we’re not just a digital
              marketing company — we’re your growth partners. Since 2025, we've helped brands thrive through
              innovative digital strategies, tailored campaigns, and technology-led solutions.
              <br />
              <br />
              Based in the UK, our team blends creativity, performance, and data-driven insights to take your
              brand to the next level. From web development to SEO and social media, we do it all with passion.
            </Typography>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
