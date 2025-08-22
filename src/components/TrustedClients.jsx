import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import goldenMap from '../assets/wmp.svg';

const pins = [
  { top: '40%', left: '33%', label: 'USA' },
  { top: '34%', left: '49%', label: 'UK' },
  { top: '49%', left: '63%', label: 'India' },
  { top: '73%', left: '74%', label: 'Australia' },
];

const TrustedClients = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0e0e0e',
        py: 8,
        px: 2,
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#a08b4d',
          fontWeight: 'bold',
          fontFamily: `'Playfair Display', serif`,
          mb: 7,
        }}
      >
        We Work With Clients Across the Globe
      </Typography>

      {/* ⬇️ Animated Map + Pins Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* ⬇️ SVG Map Image */}
        <Box
          component="img"
          src={goldenMap}
          alt="Golden World Map"
          sx={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'block',
            filter: 'drop-shadow(0 0 10px #a08b4d44)',
          }}
        />

        {/* ⬇️ Pins on Top of Map */}
        {pins.map((pin, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: pin.top,
              left: pin.left,
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              cursor: 'pointer',
              '&::before': {
                content: '""',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#d4af37',
                position: 'absolute',
                top: 0,
                left: 0,
                animation: 'pulse 2s infinite ease-in-out',
                opacity: 0.9,
              },
              '&::after': {
                content: `"${pin.label}"`,
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.90rem',
                color: '#d4af37',
                fontFamily: 'Oswald, sans-serif',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              },
              '&:hover::after': {
                fontSize: '1.05rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
              },
            }}
          />
        ))}
      </motion.div>

      {/* ⬇️ Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default TrustedClients;
