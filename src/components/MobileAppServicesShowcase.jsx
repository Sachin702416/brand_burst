import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import phoneMockup from '../assets/phone-mockup.png';
import bgImage from '../assets/stars2.jpg';

const MobileAppServicesShowcase = () => {
  const [hoverSide, setHoverSide] = useState(null); // 'left', 'right', or null

  const getTransform = () => {
    if (hoverSide === 'left') {
      return 'rotate(-90deg) perspective(600px) rotateX(-10deg) rotateY(10deg) scale(1.07)';
    }
    if (hoverSide === 'right') {
      return 'rotate(-90deg) perspective(600px) rotateX(10deg) rotateY(10deg) scale(0.9)';
    }
    return 'rotate(-90deg)';
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        px: { xs: 3, md: 10 },
        py: { xs: 4, md: 4 },
        color: '#fff',
        fontFamily: `'Oswald', sans-serif`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* LEFT POINTS */}
          <Box
            onMouseEnter={() => setHoverSide('left')}
            onMouseLeave={() => setHoverSide(null)}
            sx={{
              position: 'absolute',
              left: { md: '10px' },
              top: '50%',
              transform: 'translateY(-50%)',
              display: { xs: 'none', md: 'block' },
              textAlign: 'right',
            }}
          >
            {[
              'Basic Informational Apps',
              'Business Apps with secure backend',
              'E-commerce Apps with Payments',
            ].map((item, idx) => (
              <Typography
  key={idx}
  sx={{
    color: '#ffffff',
    fontSize: '1.1rem',
    mb: 1,
    cursor: 'pointer',
    fontFamily: `'Poppins', sans-serif`,
    lineHeight: 7,
    background: 'linear-gradient(145deg, #a08b4d, #7e6538)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: '20px',
    height: 70,
    transition: 'all 0.3s ease',
    boxShadow: `
      inset -2px -2px 4px rgba(255, 255, 255, 0.2),
      inset 2px 2px 6px rgba(0, 0, 0, 0.3),
      4px 4px 10px rgba(0, 0, 0, 0.4)
    `,
    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
    '&:hover': {
      transform: 'scale(1.06) translateY(-2px)',
      background: 'linear-gradient(145deg, #c8a74d, #886a2f)',
      boxShadow: `
        inset -2px -2px 6px rgba(255, 255, 255, 0.3),
        inset 2px 2px 6px rgba(0, 0, 0, 0.4),
        6px 6px 16px rgba(0, 0, 0, 0.6)
      `,
    },
  }}
>
  {item}
</Typography>


            ))}
          </Box>

          {/* RIGHT POINTS */}
          <Box
            onMouseEnter={() => setHoverSide('right')}
            onMouseLeave={() => setHoverSide(null)}
            sx={{
              position: 'absolute',
              right: { md: '40px' },
              top: '50%',
              transform: 'translateY(-50%)',
              display: { xs: 'none', md: 'block' },
              textAlign: 'left',
            }}
          >
            {[
              'Appointment & Booking Apps',
              'Social/Community Platforms',
              'Custom AI App Development',
            ].map((item, idx) => (
              <Typography
  key={idx}
  sx={{
    color: '#ffffff',
    fontSize: '1.1rem',
    mb: 1,
    cursor: 'pointer',
    fontFamily: `'Poppins', sans-serif`,
    lineHeight: 7,
    background: 'linear-gradient(145deg, #a08b4d, #7e6538)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: '20px',
    height: 70,
    transition: 'all 0.3s ease',
    boxShadow: `
      inset -2px -2px 4px rgba(255, 255, 255, 0.2),
      inset 2px 2px 6px rgba(0, 0, 0, 0.3),
      4px 4px 10px rgba(0, 0, 0, 0.4)
    `,
    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
    '&:hover': {
      transform: 'scale(1.06) translateY(-2px)',
      background: 'linear-gradient(145deg, #c8a74d, #886a2f)',
      boxShadow: `
        inset -2px -2px 6px rgba(255, 255, 255, 0.3),
        inset 2px 2px 6px rgba(0, 0, 0, 0.4),
        6px 6px 16px rgba(0, 0, 0, 0.6)
      `,
    },
  }}
>
  {item}
</Typography>


            ))}
          </Box>

          {/* Phone and text block */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '160px', md: '300px' },
              height: { xs: '240px', md: '340px' },
              transform: getTransform(),
              transition: 'transform 0.3s ease, filter 0.3s ease',
              filter:
                hoverSide !== null
                  ? 'drop-shadow(0 0 20px rgba(160,139,77,0.9))'
                  : 'drop-shadow(0 0 15px rgba(160,139,77,0.4))',
              cursor: 'default',
              mr: 30,
              mt: 10,
            }}
            onMouseEnter={() => setHoverSide(null)} // disables effect on phone hover
          >
            {/* Phone image */}
            <Box
              component="img"
              src={phoneMockup}
              alt="Phone Mockup"
              sx={{
                width: '140%',
                height: '180%',
                objectFit: 'contain',
              }}
            />

            {/* Text inside phone */}
            <Box
              sx={{
                position: 'absolute',
                top: '90%',
                left: '70%',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                width: '80%',
                textAlign: 'center',
              }}
            >
              <Typography
  variant="h2"
  sx={{
    fontFamily: `'Playfair Display', serif`,
    fontWeight: 700,
    fontSize: { xs: '1rem', md: '2.3rem' },
    lineHeight: 1.3,
  }}
>
  <Box
    component="span"
    sx={{
      background: 'linear-gradient(90deg, #a08b4d, #a08b4d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    CRAFTING NEXT-GEN{' '}
  </Box>
  <Box component="span" sx={{ color: '#fff' }}>
    MOBILE
  </Box>{' '}
  <Box
    component="span"
    sx={{
      background: 'linear-gradient(90deg, #a08b4d, #a08b4d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    EXPERIENCE
  </Box>
</Typography>

            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MobileAppServicesShowcase;
