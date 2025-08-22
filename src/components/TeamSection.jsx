import React, { Suspense } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';

const LogoModel = () => {
    const { scene } = useGLTF('/models/3dlogo.glb'); // path to your model

    return (
        <primitive
            object={scene}
            scale={1.5}
            position={[0, -2, 0]}
            rotation={[0.3, Math.PI / 2, 0]}
        />
    );
};

const TeamSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                ml: -10,
                width: '115%',
                minHeight: '100vh',
                mt: -16,
                background: 'radial-gradient(circle at top, #1a1a1a 20%, #000 100%)',
                color: '#fff',
                fontFamily: `'Poppins', sans-serif`,
                overflow: 'hidden',
            }}
        >
            {/* 3D Background */}
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Canvas camera={{ position: [4, 4, 4] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
                    <Stars radius={100} depth={50} count={5000} factor={4} fade />
                    <Suspense fallback={null}>
                        <LogoModel />
                    </Suspense>
                </Canvas>

            </Box>

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    px: { xs: 3, md: 10 },
                    py: { xs: 10, md: 14 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px' }}
                >
                    <Avatar
                        src="/src/assets/vini.png"
                        alt="Vini Patidar"
                        sx={{ width: 180, height: 180, mx: 'auto', mb: 3, border: '3px solid #a08b4d', boxShadow: '0 0 20px rgba(160,139,77,0.5)' }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            color: '#a08b4d',
                            fontWeight: 700,
                            fontFamily: `'Playfair Display', serif`,
                            mb: 1,
                        }}
                    >
                        Vini Patidar
                    </Typography>

                    <Typography variant="subtitle1" sx={{ color: '#bbb', mb: 4,fontFamily: 'Poppins,sans-serif', }}>
                        Founder & Managing Director
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#A9A9A9',
                            lineHeight: 1.8,
                            fontSize: '1rem',
                            fontFamily: 'Poppins,sans-serif',
                        }}
                    >
                        “Inspired by the evolving digital landscape and driven by a passion for building bold brands,
                        I started The BrandBurst to empower businesses with impactful strategies and cutting-edge
                        creativity. Let’s craft your success story — together.”
                    </Typography>

                    <Button
                        variant="outlined"
                        component="a"
                        href="https://www.linkedin.com/in/vini-patidar-548831133/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            mt: 5,
                            color: '#a08b4d',
                            borderColor: '#a08b4d',
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                backgroundColor: 'rgba(160,139,77,0.1)',
                                borderColor: '#a08b4d',
                            },
                            fontFamily: 'Poppins,sans-serif',
                        }}
                    >
                        Get In Touch
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
};

export default TeamSection;
