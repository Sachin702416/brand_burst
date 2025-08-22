import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    IconButton,
    Divider,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0e0e0e',
                color: '#fff',
                pt: 8,
                px: { xs: 3, md: 12 },
                pb: 4,
                fontFamily: `'Inter', sans-serif`,
                position: 'relative',
            }}
        >
            <Grid container spacing={6}>
                {/* About Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ color: '#a08b4d', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontFamily: `'Poppins', sans-serif`}}>
                        About BRANDBURST
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.8, ml: 9,fontFamily: `'Poppins', sans-serif`}}>
                        BRANDBURST is a digital-first agency helping brands ignite their presence with unique strategies,
                        branding solutions, and conversion-driven campaigns. We deliver ROI with creativity and data.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={2.5} sx={{ ml: 20 , mr:30}}>
                    <Typography variant="h6" sx={{ color: '#a08b4d', mb: 2,fontFamily: `'Poppins', sans-serif` }}>
                        Quick Links
                    </Typography>
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'About', to: '/about' },
                        { label: 'Contact', to: '/contact' }
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.to}
                            underline="none"
                            color="#bbb"
                            sx={{
                                display: 'block',
                                mb: 1,
                                fontSize: '0.95rem',
                                transition: '0.3s',
                                '&:hover': { color: '#a08b4d', pl: 0.5 },
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Grid>

                {/* Contact Info */}
                <Grid item xs={12} sm={6} md={2.5}>
                    <Typography variant="h6" sx={{ color: '#a08b4d', mb: 2,fontFamily: `'Poppins', sans-serif` }}>
                        Contact Us
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon sx={{ mr: 1, color: '#a08b4d' }} fontSize="small" />
                        <Typography variant="body2" color="#bbb" sx={{fontFamily: `'Poppins', sans-serif`}}>vini@thebrandburst.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1, color: '#a08b4d' }} fontSize="small" />
                        <Typography variant="body2" color="#bbb" sx={{fontFamily: `'Poppins', sans-serif`}}>+91 98765 43210</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'start' }}>
                        <LocationOnIcon sx={{ mr: 1, color: '#a08b4d' }} fontSize="small" />
                        <Typography variant="body2" color="#bbb" sx={{fontFamily: `'Poppins', sans-serif`}}>Coventry, United Kingdom</Typography>
                    </Box>
                </Grid>

                {/* Newsletter */}
                <Grid item xs={12} md={3} sx={{ml: 6}}>
                    <Typography variant="h6" sx={{ color: '#a08b4d', mb: 2,fontFamily: `'Poppins', sans-serif` }}>
                        Stay Updated
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ccc', mb: 2,fontFamily: `'Poppins', sans-serif` }}>
                        Subscribe to our newsletter to get the latest insights and updates.
                    </Typography>
                    <form action="https://formspree.io/f/myzpplyv" method="POST">
                        <TextField
                            name="email"
                            size="small"
                            fullWidth
                            placeholder="Enter your email"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton type="submit" sx={{ color: '#a08b4d' }}>
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#111',
                                borderRadius: '6px',
                                input: { color: '#fff' },
                                '& fieldset': {
                                    borderColor: 'rgba(160,139,77,0.4)',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#a08b4d',
                                },
                                fontFamily: `'Poppins', sans-serif`
                            }}
                        />
                    </form>
                </Grid>
            </Grid>

            {/* Social Media */}
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                {[
                    { icon: <InstagramIcon />, label: 'Instagram', link: 'https://www.instagram.com/the.brandburst/' },
                    { icon: <LinkedInIcon />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/the-brandburst-ltd-166b0b377/' },
                    { icon: <FacebookIcon />, label: 'Facebook', link: 'https://www.facebook.com/thebrandburst/' },
                    { icon: <XIcon />, label: 'Twitter / X', link: 'https://x.com/thebrandburst' },
                ].map(({ icon, label, link }, index) => (
                    <IconButton
                        key={index}
                        href={link}
                        aria-label={label}
                        sx={{
                            color: '#a08b4d',
                            mx: 1,
                            transition: '0.3s',
                            '&:hover': { color: '#fff' },
                        }}
                    >
                        {icon}
                    </IconButton>
                ))}
            </Box>

            {/* Divider and Copyright */}
            <Divider sx={{ my: 4, borderColor: 'rgba(160, 139, 77, 0.2)' }} />
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    color: '#777',
                    fontSize: '0.85rem',
                    fontFamily: `'Poppins', sans-serif`
                }}
            >
                © {new Date().getFullYear()} <strong style={{ color: '#a08b4d' }}>BRANDBURST</strong>. All rights reserved. Designed & Developed with ❤️ By Sachin Singh Rajawat
            </Typography>
        </Box>
    );
};

export default Footer;
