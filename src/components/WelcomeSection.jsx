import React, { Suspense, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Torus Component
const LogoModel = () => {
  const { scene } = useGLTF('/models/3dlogo.glb'); // ✅ remove "/public" in path
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.03; // 🔁 Higher value = faster rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
      rotation={[0.3, Math.PI / 2, 0]}
    />
  );
};


const WelcomeSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#0e0e0e',
        overflow: 'hidden',
        py: { xs: 6, md: 12 },
        px: 2,
        color: '#fff',
      }}
    >
      {/* Three.js Canvas Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 55,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.3, // Increased from 0.2
        }}
      >
        <Canvas camera={{ position: [4, 2, 5], fov: 50 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[3, 5, 2]} intensity={3} />
          <Suspense fallback={null}>
            <LogoModel />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>

      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, mb: 5 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontWeight: 700,
                  color: '#a08b4d',
                  mb: 3,
                  mt: 2,
                  textAlign: 'center',
                }}
              >
                Welcome to{' '}
                {Array.from('BRANDBURST').map((letter, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ y: -8, color: '#a08b4d' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      display: 'inline-block',
                      color: '#ffffff',
                      marginRight: letter === ' ' ? '0.25rem' : '0.05rem',
                      fontFamily: `'Playfair Display', serif`,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </Typography>


              <Typography
                variant="body1"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  color: '#ccc',
                  lineHeight: 1.8,
                  mt: 5,
                  textAlign: 'center', // ✅ Add this line
                }}
              >

                <strong>The BRANDBURST:</strong> Your Premier Partner in Digital Marketing Excellence
                <br /><br />
                Are you seeking a reliable digital marketing agency in the UK to strengthen your online presence and drive meaningful business growth?
                Look no further than <strong>The BRANDBURST</strong> — a reputed digital marketing company based in Coventry, UK, known for crafting performance-driven strategies for brands across industries.
                At BRANDBURST, we recognize that a powerful digital presence is essential in today’s competitive landscape.
                We offer tailored digital marketing solutions that align with your unique goals and audience.
                <br /><br />
                Our services include website development, search engine optimization (SEO), social media management, email marketing, content creation, PPC advertising, and branding consultation — all delivered with creativity, precision, and measurable impact.
                Whether you're a growing startup or a well-established business, BRANDBURST is here to elevate your digital journey with strategic expertise and innovative solutions.


              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
