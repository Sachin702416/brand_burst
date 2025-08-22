import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'SEO',
    description:
      'Boost your website ranking and attract organic traffic through smart search engine strategies.',
  },
  {
    title: 'CRM',
    description:
      'Manage customer relationships efficiently to increase loyalty, sales, and communication tracking.',
  },
  {
    title: 'WEB DEV',
    description:
      'Build fast, responsive, and user-friendly websites that reflect your brand and drive engagement.',
  },
  {
    title: 'SOCIAL',
    description:
      'Grow your brand presence through targeted social media marketing and interactions.',
  },
];

const DigitalMarketingBenefits = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* Tooltip Floating Above Entire Page */}
      {hoveredItem && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            top: mousePosition.y + 20,
            left: mousePosition.x,
            transform: 'translateX(-50%)',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              bgcolor: '#000000',
              color: '#f0f0f0',
              px: 5,
              py: 3,
              borderRadius: '12px',
              fontSize: '0.8rem',
              width: 240,
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              lineHeight: 1.6,
              transition: 'all 0.3s ease-in-out',
              backdropFilter: 'blur(4px)',
            }}
          >
            {hoveredItem}
          </Box>
        </motion.div>
      )}

      {/* Main Animated Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={3}
          sx={{
            height: '19.5vh',
            width: '100%',
            overflowX: 'hidden',
            backgroundColor: '#000',
            color: '#fff',
            borderTop: '1px solid #333',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'scroll 18s linear infinite',
              width: 'fit-content',
              px: 2,
            }}
          >
            {benefits.concat(benefits).map((item, index) => (
              <Box
                key={index}
                onMouseEnter={() => setHoveredItem(item.description)}
                onMouseLeave={() => setHoveredItem(null)}
                onMouseMove={(e) => {
                  setMousePosition({ x: e.clientX, y: e.clientY });
                }}
                sx={{
                  minWidth: '25vw',
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 70,
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: hoveredItem === item.description ? 600 : 400,
                  color: hoveredItem === item.description ? '#FFD700' : '#aaa',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#FFD700',
                  },
                }}
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Marquee CSS */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </motion.div>
    </>
  );
};

export default DigitalMarketingBenefits;
