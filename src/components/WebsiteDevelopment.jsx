import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import phoneMock from '../assets/phone-mockup.png';
import mvImg from '../assets/mv.jpg';
import heroImg from '../assets/herobg.jpg';
import gemImg from '../assets/gembg.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    title: 'Custom Websites',
    desc: 'Bespoke, fast, and scalable websites designed around your goals and brand ethos.',
    bullets: ['Brand-first design', 'Clean, semantic code', 'SEO-friendly foundation'],
  },
  {
    title: 'E‑Commerce Solutions',
    desc: 'Robust online stores with secure checkout, inventory, and analytics.',
    bullets: ['Payment integrations', 'Optimized product pages', 'Order & stock management'],
  },
  {
    title: 'WordPress & CMS',
    desc: 'Editor-friendly sites that are simple to update and maintain in-house.',
    bullets: ['Reusable blocks', 'Role-based access', 'Performance tuned'],
  },
  {
    title: 'UI/UX & Prototyping',
    desc: 'Human-centered design with wireframes and clickable prototypes.',
    bullets: ['User research', 'Rapid prototyping', 'Usability testing'],
  },
  {
    title: 'Performance & SEO',
    desc: 'Speed, Core Web Vitals, and on-page SEO done right from day one.',
    bullets: ['Image optimization', 'Schema, meta & sitemaps', 'Caching & CDNs'],
  },
  {
    title: 'Maintenance & Support',
    desc: 'Ongoing care with updates, monitoring, and issue resolution.',
    bullets: ['24/7 monitoring', 'Security patches', 'Content upkeep'],
  },
];

const processSteps = [
  { step: '01', title: 'Discover', text: 'We understand your business, users, and goals.' },
  { step: '02', title: 'Design', text: 'We craft wireframes and high-fidelity UI concepts.' },
  { step: '03', title: 'Develop', text: 'We build responsive, accessible, and scalable UIs.' },
  { step: '04', title: 'Launch', text: 'We ship, monitor, and iterate for impact.' },
];

const showcase = [
  { title: 'Modern Landing Page', img: heroImg },
  { title: 'Corporate Profile', img: mvImg },
  { title: 'E‑Commerce Storefront', img: gemImg },
];

const WebsiteDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar showMiniNav={true} />

      {/* HERO: light split with strong left column */}
      <Box sx={{ background: 'linear-gradient(180deg,#faf7f0 0%,#ffffff 70%)', color: '#111' }}>
        <Container sx={{ py: { xs: 8, md: 22 }, position: 'relative' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Chip
                    label="Design • Build • Grow"
                    sx={{
                      backgroundColor: 'rgba(160,139,77,0.12)',
                      color: '#8d7a44',
                      border: '1px solid rgba(160,139,77,0.22)',
                      mb: 2,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      fontFamily: 'Playfair Display, serif',
                      lineHeight: 1.15,
                      mb: 2,
                      color: '#0f0f0f',
                      fontSize: { xs: '2.4rem', md: '3.5rem' },
                    }}
                  >
                    Websites that look beautiful and perform brilliantly
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: 'rgba(0,0,0,0.7)',
                      maxWidth: 560,
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    We design and develop elegant, fast, and conversion‑focused websites that scale
                    with your business.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/contact')}
                      endIcon={<FaArrowRight />}
                      sx={{
                        backgroundColor: '#a08b4d',
                        borderRadius: '14px',
                        px: 3,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontFamily: 'Poppins, sans-serif',
                        '&:hover': { backgroundColor: '#8e773e' },
                      }}
                    >
                      Start a Project
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
                      sx={{
                        borderColor: 'rgba(0,0,0,0.12)',
                        color: '#111',
                        borderRadius: '14px',
                        px: 3,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontFamily: 'Poppins, sans-serif',
                        '&:hover': { borderColor: '#a08b4d', background: 'rgba(160,139,77,0.04)' },
                      }}
                    >
                      See Work
                    </Button>
                  </Stack>
                </motion.div>

                <Stack direction="row" spacing={1} mt={3} sx={{ flexWrap: 'wrap' }}>
                  {['Corporate', 'E‑Commerce', 'Landing Pages', 'Web Apps'].map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        mr: 1,
                        mb: 1,
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.08)',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    />
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>

          {/* ABSOLUTE floating laptop (moved to bottom: 200px) */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 140, // <-- moved to 200px from bottom as requested
              right: { xs: 16, md: 24 },
              width: { xs: 220, sm: 320, md: 420, lg: 500 },
              display: { xs: 'none', md: 'block' },
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <motion.div initial={{ y: 0 }} animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Box component="span" sx={{ display: 'block', width: '100%', aspectRatio: '16/10' }}>
                <svg viewBox="0 0 480 300" width="100%" height="100%" style={{ display: 'block' }}>
                  <rect x="40" y="220" width="400" height="32" rx="10" fill="#dedede" />
                  <rect x="60" y="40" width="360" height="200" rx="18" stroke="#c7c7c7" strokeWidth="2" />
                  <rect x="80" y="60" width="320" height="160" rx="8" fill="#e3e6f3" />
                  <rect x="100" y="80" width="140" height="22" rx="4" fill="#a08b4d" opacity="0.85" />
                  <rect x="100" y="112" width="210" height="12" rx="3" fill="#c7c7c7" />
                  <rect x="100" y="132" width="190" height="12" rx="3" fill="#c7c7c7" />
                  <rect x="100" y="152" width="170" height="12" rx="3" fill="#c7c7c7" />
                  <rect x="100" y="172" width="120" height="12" rx="3" fill="#c7c7c7" />
                  <circle cx="240" cy="52" r="3" fill="#bdbdbd" />
                  <ellipse cx="240" cy="230" rx="120" ry="10" fill="#a08b4d" opacity="0.12" />
                </svg>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Process timeline */}
      <Box sx={{ background: '#ffffff', color: '#111' }}>
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, mb: 1 }}>
                Our Process
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.66)', mb: 4, maxWidth: 760 }}>
                A simple, collaborative, and transparent approach from idea to launch.
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {processSteps.map((p, i) => (
                <Grid item xs={12} md={3} key={i}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 3,
                        width: 510,
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                        transition: 'transform .25s ease, box-shadow .25s ease',
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#a08b4d',
                            color: '#fff',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Poppins, sans-serif',
                            mr: 1.2,
                          }}
                        >
                          {p.step}
                        </Box>
                        <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                          {p.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.7)' }}>
                        {p.text}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Services */}
      <Box sx={{ background: '#f6f6f6', color: '#111' }}>
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, mb: 1 }}>
                Services Tailored to You
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.66)', mb: 4, maxWidth: 760 }}>
                We offer end‑to‑end web development services—from discovery to launch and beyond.
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {services.map((s, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 3,
                        width: 510,
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: '#fff',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                        transition: 'transform .25s ease, box-shadow .25s ease',
                        '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 18px 48px rgba(0,0,0,0.08)' },
                      }}
                    >
                      <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, mb: 1 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.7)', mb: 2 }}>
                        {s.desc}
                      </Typography>
                      {s.bullets.map((b, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <FaCheckCircle style={{ color: '#4CAF50', marginRight: 8 }} />
                          <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                            {b}
                          </Typography>
                        </Box>
                      ))}
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Showcase */}
      <Box sx={{ background: '#fff', color: '#111' }}>
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, mb: 1 }}>
                Recent Work Highlights
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.66)', mb: 4, maxWidth: 760 }}>
                A glimpse of the experiences we've crafted for brands across industries.
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {showcase.map((item, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        width: 366,
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 10px 35px rgba(0,0,0,0.08)',
                        transition: 'transform .25s ease, box-shadow .25s ease',
                        '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 18px 50px rgba(0,0,0,0.12)' },
                      }}
                    >
                      <Box component="img" src={item.img} alt={item.title} sx={{ width: '100%', height: 220, objectFit: 'cover' }} />
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ background: '#f7f6f3', color: '#111', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <Container sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, mb: 1 }}>
              Let's build something great together
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(0,0,0,0.66)', mb: 3, maxWidth: 680, mx: 'auto' }}>
              From idea to impact—your next website starts here.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/contact')}
              endIcon={<FaArrowRight />}
              sx={{
                backgroundColor: '#a08b4d',
                borderRadius: '12px',
                px: 3,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': { backgroundColor: '#8e773e' },
              }}
            >
              Talk to Us
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
