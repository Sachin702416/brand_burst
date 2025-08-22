import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'Why should I choose BRANDBURST?',
    answer:
      'We combine expertise, transparency, and custom strategy to deliver measurable digital growth tailored to your goals.',
  },
  {
    question: 'How does SEO help my business or How Can SEO Benefit My UK-Based Business?',
    answer:
      'SEO improves your search visibility, brings in more qualified traffic, and helps build local presence in Indore and beyond.',
  },
  {
    question: "Does BRANDBURST provide it's services out of Indore?",
    answer:
      'Yes! We work with clients across India and globally through virtual consultations and remote strategies.',
  },
  {
    question: 'How do you tailor your strategies?',
    answer:
      'Every client is unique. We analyze your goals, market, and competitors to craft personalized strategies that convert.',
  },
  {
    question: 'What sets you apart from other agencies?',
    answer:
      'Our client-first approach, data-driven insights, in-house CRM, and proven ROI distinguish us from the rest.',
  },
  {
    question: 'How Do You Customize Marketing Strategies?',
    answer:
      'We customize based on industry trends, audience behavior, and your specific KPIs for maximum impact.',
  },
  {
    question: 'How Can I Start Working with BRANDBURST?',
    answer:
      'Simply contact us at vini@thebrandburst.com or fill out our inquiry form. We’ll schedule a free consultation.',
  },
  {
    question: 'What makes BRANDBURST’s CRM different from others?',
    answer:
      'Our CRM is tailored for SMEs, with built-in automation, lead tracking, and real-time analytics—all mobile accessible.',
  },
  {
    question: 'Can I access the CRM from my phone or tablet?',
    answer:
      'Yes, our CRM is fully responsive and optimized for mobile and tablet devices.',
  },
];

const FAQSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        backgroundColor: '#000',
        fontFamily: `'Lato', sans-serif`,
        color: '#fff',
        minHeight: '100vh',
        scrollBehavior: 'smooth',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 2,
            color: '#a08b4d',
            fontFamily: 'Playfair Display, serif',
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 5,
            color: '#bbb',
            fontFamily: `'Poppins', sans-serif`,
          }}
        >
          Please reach us at{' '}
          <strong style={{ color: '#a08b4d' }}>
            vini@thebrandburst.com
          </strong>{' '}
          if you cannot find an answer to your question.
        </Typography>
      </motion.div>

      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
          viewport={{ once: true }}
        >
          <Accordion
            sx={{
              mb: 3,
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(160, 139, 77, 0.6)',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 30px rgba(160, 139, 77, 0.1)',
              transition:
                'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',

              '&:hover': {
                transform: 'scale(1.015)',
                boxShadow: '0 0 18px rgba(160, 139, 77, 0.5)',
                borderColor: '#a08b4d',
              },

              '& .MuiAccordionSummary-root': {
                backgroundColor: '#1e1e1e', // ✔ more visible grey
                transition: 'background-color 0.3s ease',
              },
              '& .MuiAccordionSummary-root:hover': {
                backgroundColor: '#292929',
              },
              '& .MuiAccordionDetails-root': {
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderTop: '1px solid rgba(160,139,77,0.3)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
                padding: '16px',
                animation: 'fadeIn 0.5s ease-in',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#a08b4d',
                    transition: 'transform 0.3s ease',
                    '&.Mui-expanded': {
                      transform: 'rotate(180deg)',
                    },
                  }}
                />
              }
              aria-controls={`faq-${index}-content`}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: `'Poppins', sans-serif`,
                  fontSize: '1.1rem',
                  color: '#a08b4d',
                  letterSpacing: '0.5px',
                  textShadow: '0 0 2px rgba(160, 139, 77, 0.4)',
                  transition: 'color 0.3s',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: '#ddd',
                  fontFamily: `'Poppins', sans-serif`,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  letterSpacing: '0.2px',
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default FAQSection;
