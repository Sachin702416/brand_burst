import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar showMiniNav={true} />

      {/* Content */}
      <Box
        sx={{
          py: 8,
          px: { xs: 3, md: 10 },
          mt: '120px',
          fontFamily: `'Inter', sans-serif`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#a08b4d',
              fontWeight: 700,
              mb: 1,
              textAlign: 'start',
              fontFamily: `'Playfair Display', serif`,
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Left - Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.form
              action="https://formspree.io/f/xnnzzldd/"
              method="POST"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  label: 'Name',
                  name: 'name',
                  icon: <PersonIcon sx={{ color: '#a08b4d' }} />,
                },
                {
                  label: 'Email',
                  name: 'email',
                  type: 'email',
                  icon: <EmailIcon sx={{ color: '#a08b4d' }} />,
                },
                {
                  label: 'Phone Number',
                  name: 'phone',
                  type: 'tel',
                  icon: <PhoneIcon sx={{ color: '#a08b4d' }} />,
                },
              ].map((field, idx) => (
                <TextField
                  key={idx}
                  label={field.label}
                  name={field.name}
                  type={field.type || 'text'}
                  required
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: '1000px',
                    
                    input: {
                      backgroundColor: 'rgba(255,255,255,0.07)',
                      color: '#fff',
                      padding: '12px',
                      borderRadius: '8px',
                    },
                    label: { color: '#bbb' },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      '& fieldset': {
                        borderColor: 'rgba(160, 139, 77, 0.5)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#a08b4d',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#a08b4d',
                        boxShadow: '0 0 6px rgba(160, 139, 77, 0.5)',
                      },
                    },
                  }}
                />
              ))}

              <TextField
                label="Message"
                name="message"
                required
                fullWidth
                multiline
                rows={4}
                margin="normal"
                sx={{
                  width: '1000px',
                  textarea: {
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '8px',
                  },
                  label: { color: '#bbb' },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: 'rgba(160, 139, 77, 0.5)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#a08b4d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#a08b4d',
                      boxShadow: '0 0 6px rgba(160, 139, 77, 0.5)',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  mt: 2,
                  backgroundColor: '#a08b4d',
                  color: '#000',
                  ml: 100,
                  fontWeight: 600,
                  borderRadius: '10px',
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
            </motion.form>
          </Grid>
          

          {/* Right - Contact Info & Map */}
          <Grid item xs={12} md={6} sx={{ml: 130, mt: -69}}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#a08b4d',
                  mb: 5,
                  fontFamily: `'Playfair Display', serif`,
                }}
              >
                Contact Information
              </Typography>

              {[
                {
                  icon: <EmailIcon sx={{ mr: 1, color: '#a08b4d' }} />,
                  text: 'vini@thebrandburst.com',
                },
                {
                  icon: <PhoneIcon sx={{ mr: 1, color: '#a08b4d' }} />,
                  text: '+44 7887146830',
                },
                {
                  icon: <LocationOnIcon sx={{ mr: 1, color: '#a08b4d' }} />,
                  text: 'Coventry, United Kingdom',
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: `'Poppins', sans-serif`,
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" color="#ccc">
                    {item.text}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  border: '2px solid #a08b4d',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: 300,
                }}
              >
                <iframe
                  title="BRANDBURST Office Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38870.23186227761!2d-1.5686512736970672!3d52.490188802063244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry%2C%20UK!5e0!3m2!1sen!2sin!4v1754066512000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactSection;
