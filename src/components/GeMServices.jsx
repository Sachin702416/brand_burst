import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Container, Divider, Button, Chip, Avatar } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Business, 
  Assignment, 
  Gavel, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowForward,
  AutoAwesome,
  Verified,
  Security,
  Speed,
  Support
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/gembg.jpg';

const serviceDetails = [
  {
    title: 'GeM Account Creation',
    description:
      'Our expert consultants handle every step of your GeM account setup—from profile creation to verification—ensuring a seamless and swift onboarding experience.',
    icon: <Business sx={{ fontSize: 40, color: '#a08b4d' }} />,
    features: ['Profile Setup', 'Documentation', 'Verification', 'Training'],
    color: '#a08b4d'
  },
  {
    title: 'GeM Tender Filling',
    description:
      'Avoid delays and errors with our professional tender assistance. We manage documentation, compliance, and on-time submission to boost your chances.',
    icon: <Assignment sx={{ fontSize: 40, color: '#8e773e' }} />,
    features: ['Documentation', 'Compliance', 'Submission', 'Tracking'],
    color: '#8e773e'
  },
  {
    title: 'Bidding Assistance',
    description:
      'Win more contracts with our strategic bidding support. From requirement analysis to proposal drafting, we help you stay ahead in competitive tenders.',
    icon: <Gavel sx={{ fontSize: 40, color: '#a08b4d' }} />,
    features: ['Strategy', 'Analysis', 'Proposals', 'Support'],
    color: '#a08b4d'
  },
  {
    title: 'Reverse Auction Support',
    description:
      'Reverse auctions can be tricky—our team empowers you with insights, pricing strategies, and real-time assistance to maximize your auction success.',
    icon: <TrendingUp sx={{ fontSize: 40, color: '#8e773e' }} />,
    features: ['Pricing Strategy', 'Real-time Support', 'Insights', 'Success'],
    color: '#8e773e'
  },
];

const benefits = [
  'Expert GeM Consultants with 5+ Years Experience',
  '100% Success Rate in Account Verification',
  '24/7 Support for Tender Queries',
  'Strategic Bidding to Maximize Wins',
  'Compliance & Documentation Excellence',
  'Real-time Auction Support & Guidance'
];

const GeMServices = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <>
      <Navbar showMiniNav={true} />

      {/* HERO SECTION */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(17, 17, 17, 0.7) 50%, rgba(0, 0, 0, 0.8) 100%),
            url(${bgImage})
          `,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 3,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: '#a08b4d',
                mb: 3,
              }}
            >
              Government e-Marketplace (GeM) Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.8,
                color: '#ddd',
              }}
            >
              Premium consultancy and execution for GeM registration, tender support, reverse auction strategy, and government procurement success — powered by BRANDBURST.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* DETAILS SECTION */}
      <Box
        sx={{
          backgroundColor: '#0d0d0d',
          color: '#fff',
          py: 10,
          px: { xs: 3, md: 12 },
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.9,
                color: '#ccc',
              }}
            >
              <strong>GeM Services by The BRANDBURST</strong>
              <br /><br />
              The Government e-Marketplace (GeM) opens immense business possibilities within India's public sector. But navigating it can be complex. That’s why BRANDBURST is here—with tailored services to simplify registration, bidding, and auctioning, so you can focus on growth.
            </Typography>
          </motion.div>

          <Divider
            sx={{
              borderColor: '#a08b4d',
              my: 6,
              width: '30%',
              mx: 'auto',
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Playfair Display, serif',
              color: '#a08b4d',
              fontWeight: 600,
              textAlign: 'center',
              mb: 6,
            }}
          >
            BRANDBURST’s Exclusive GeM Services
          </Typography>

          <Grid container spacing={4}>
            {serviceDetails.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 4,
                      minHeight: '150px',
                      width: '1100px',
                      borderRadius: '18px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(160,139,77, 0.5)',
                      backdropFilter: 'blur(10px)',
                      color: '#eee',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 12px rgba(160,139,77,0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 0 20px rgba(160,139,77,0.4)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        color: '#a08b4d',
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: '#ccc',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default GeMServices;
