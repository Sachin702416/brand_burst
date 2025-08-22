import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent, Chip, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaSearch, FaUsers, FaChartLine, FaMoneyBillWave, FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SEO = () => {
  const navigate = useNavigate();

  const seoBenefits = [
    { icon: <FaSearch size={32} />, title: "Increased Visibility", text: "Rank higher in search results and be found by the right audience.", color: "#4CAF50" },
    { icon: <FaUsers size={32} />, title: "Quality Traffic", text: "Attract visitors genuinely interested in your products or services.", color: "#2196F3" },
    { icon: <FaChartLine size={32} />, title: "Better User Experience", text: "Optimized websites keep visitors engaged and coming back.", color: "#FF9800" },
    { icon: <FaMoneyBillWave size={32} />, title: "Cost Effective", text: "Enjoy long-term benefits with a smaller marketing budget.", color: "#9C27B0" },
  ];

  const seoServices = [
    "Keyword Research & Analysis",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Link Building Strategies",
    "Local SEO Services",
    "Content Optimization",
    "Mobile SEO",
    "Analytics & Reporting"
  ];

  return (
    <>
      <Navbar showMiniNav={true} />

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #111 100%)",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
          py: { xs: 10, md: 22 },
          position: "relative",
          overflow: "hidden",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(160,139,77,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)",
            position: "absolute",
            inset: 0,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "100px",
            height: "100px",
            background: "radial-gradient(circle, rgba(160,139,77,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "60%",
            right: "15%",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
                          <motion.div variants={fadeInUp}>
                <Chip
                  label="Digital Marketing Excellence"
                  sx={{
                    backgroundColor: "rgba(160,139,77,0.2)",
                    color: "#a08b4d",
                    border: "1px solid rgba(160,139,77,0.3)",
                    mb: 3,
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(160,139,77,0.3)",
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 12px rgba(160,139,77,0.3)",
                    },
                  }}
                />
              </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontFamily: "Playfair Display, serif",
                  color: "#a08b4d",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.2,
                }}
                gutterBottom
              >
                Search Engine
                <br />
                <span style={{ color: "#fff" }}>Optimization</span>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h6"
                sx={{ 
                  maxWidth: "800px", 
                  mx: "auto", 
                  opacity: 0.9, 
                  fontWeight: 400,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.6,
                  fontFamily: "Poppins, sans-serif",
                  mb: 4
                }}
              >
                Boost your online visibility, attract high-quality traffic, and outshine competitors
                with our proven SEO strategies that drive sustainable growth.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/contact")}
                  sx={{
                    backgroundColor: "#a08b4d",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.1rem",
                    "&:hover": { 
                      backgroundColor: "#8e773e",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(160,139,77,0.3)"
                    },
                    transition: "all 0.3s ease",
                  }}
                  endIcon={<FaArrowRight />}
                >
                  Get Started Today
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    borderRadius: "50px",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": { 
                      borderColor: "#a08b4d",
                      backgroundColor: "rgba(160,139,77,0.1)"
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Why SEO Matters */}
      <Container sx={{ py: 12, background: "#0a0a0a" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "Playfair Display, serif",
                color: "#a08b4d",
                mb: 2,
              }}
            >
              Why SEO Matters
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: "#fff",
                opacity: 0.8,
                mb: 6,
                fontFamily: "Poppins, sans-serif",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Discover how our SEO strategies can transform your digital presence
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {seoBenefits.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  variants={fadeInUp}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      py: 5,
                      px: 3,
                      background: "linear-gradient(145deg, #1a1a1a, #0f0f0f)",
                      color: "#fff",
                      borderRadius: 4,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      "&:hover": { 
                        transform: "translateY(-12px) scale(1.02)", 
                        boxShadow: `0 20px 50px rgba(${item.color}, 0.3)`,
                        border: `1px solid rgba(${item.color}, 0.5)`,
                        "& .icon-hover": {
                          transform: "scale(1.2) rotate(5deg)",
                          color: item.color,
                        }
                      },
                      position: "relative",
                      overflow: "hidden",
                      width: "510px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                      }}
                    />
                    <Box sx={{ color: item.color, mb: 3, mt: 1 }} className="icon-hover" style={{ transition: "all 0.3s ease" }}>{item.icon}</Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontFamily: "Poppins, sans-serif", 
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        opacity: 0.8, 
                        lineHeight: 1.6,
                        fontFamily: "Poppins, sans-serif",
                        color: "#ccc"
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* SEO Services Section */}
      <Box sx={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)", color: "#fff", py: 12 }}>
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                sx={{ 
                  fontFamily: "Playfair Display, serif", 
                  fontWeight: 700, 
                  color: "#a08b4d", 
                  mb: 3,
                  textAlign: "center"
                }}
              >
                Our SEO Services
              </Typography>
            </motion.div>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" sx={{ mb: 4, color: "#a08b4d", fontWeight: 600,fontFamily: "Poppins, sans-serif" }}>
                    Comprehensive SEO Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9, mb: 4,fontFamily: "Poppins, sans-serif" }}>
                    At <strong>The Digital Consultancy</strong>, we understand that SEO is the backbone of online growth.
                    From keyword research to technical audits and link building, we tailor every strategy to your
                    business needs. Whether you're a local shop or a global enterprise, our SEO techniques are designed
                    to improve visibility, drive conversions, and ensure long-lasting results.
                  </Typography>
                  
                                     <Box sx={{ 
                     display: "flex", 
                     alignItems: "center", 
                     mb: 3,
                     cursor: "pointer",
                     transition: "all 0.3s ease",
                     "&:hover": {
                       transform: "translateX(10px)",
                       "& .rocket-icon": {
                         transform: "scale(1.3) rotate(15deg)",
                         color: "#8e773e"
                       }
                     }
                   }}>
                     <FaRocket 
                       className="rocket-icon"
                       style={{ 
                         color: "#a08b4d", 
                         marginRight: "12px", 
                         fontSize: "20px",
                         transition: "all 0.3s ease"
                       }} 
                     />
                     <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600,fontFamily: "Poppins, sans-serif" }}>
                       Proven Results & ROI
                     </Typography>
                   </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                                     <Box sx={{ 
                     background: "rgba(160,139,77,0.05)", 
                     p: 4, 
                     borderRadius: 3,
                     border: "1px solid rgba(160,139,77,0.2)",
                     cursor: "pointer",
                     transition: "all 0.3s ease",
                     "&:hover": {
                       background: "rgba(160,139,77,0.1)",
                       border: "1px solid rgba(160,139,77,0.4)",
                       transform: "translateY(-2px)",
                       boxShadow: "0 8px 25px rgba(160,139,77,0.2)"
                     }
                   }}>
                    <Typography variant="h6" sx={{ mb: 3, color: "#a08b4d", fontWeight: 600,fontFamily: "Poppins, sans-serif" }}>
                      What We Offer
                    </Typography>
                    <Grid container spacing={2}>
                      {seoServices.map((service, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                                                     <Box sx={{ 
                             display: "flex", 
                             alignItems: "center", 
                             mb: 2,
                             cursor: "pointer",
                             transition: "all 0.2s ease",
                             "&:hover": {
                               transform: "translateX(5px)",
                               "& .check-icon": {
                                 transform: "scale(1.2)",
                                 color: "#66BB6A"
                               }
                             }
                           }}>
                             <FaCheckCircle 
                               className="check-icon"
                               style={{ 
                                 color: "#4CAF50", 
                                 marginRight: "8px", 
                                 fontSize: "16px",
                                 transition: "all 0.2s ease"
                               }} 
                             />
                             <Typography variant="body2" sx={{ color: "#ccc",fontFamily: "Poppins, sans-serif" }}>
                               {service}
                             </Typography>
                           </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ background: "#0a0a0a", color: "#fff", py: 8,ml: 40 }}>
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <Grid container spacing={4} sx={{ textAlign: "center" }}>
              {[
                { number: "500+", label: "Websites Optimized" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "300%", label: "Average Traffic Increase" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                                     <motion.div variants={fadeInUp}>
                     <Typography
                       variant="h3"
                       sx={{
                         fontWeight: 800,
                         color: "#a08b4d",
                         mb: 1,
                         fontSize: { xs: "2rem", md: "3rem" },
                         fontFamily: "Poppins, sans-serif",
                         cursor: "pointer",
                         transition: "all 0.3s ease",
                         "&:hover": {
                           transform: "scale(1.1)",
                           color: "#8e773e",
                           textShadow: "0 0 20px rgba(160,139,77,0.5)"
                         }
                       }}
                     >
                       {stat.number}
                     </Typography>
                                         <Typography
                       variant="body2"
                       sx={{
                         opacity: 0.8,
                         textTransform: "uppercase",
                         letterSpacing: "1px",
                         fontSize: "0.9rem",
                         fontFamily: "Poppins, sans-serif",
                         cursor: "pointer",
                         transition: "all 0.3s ease",
                         "&:hover": {
                           opacity: 1,
                           color: "#fff",
                           transform: "translateY(-2px)"
                         }
                       }}
                     >
                       {stat.label}
                     </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #a08b4d, #8e773e)",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            position: "absolute",
            inset: 0,
          }}
        />
        
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "1.8rem", md: "2.5rem" }
              }}
            >
              Ready to take your business to the top of search results?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4, 
                opacity: 0.9,
                maxWidth: "600px",
                mx: "auto",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Join hundreds of businesses that have transformed their online presence with our SEO expertise.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "#111",
                px: 6,
                py: 2,
                fontWeight: 600,
                borderRadius: "50px",
                textTransform: "none",
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                "&:hover": { 
                  backgroundColor: "#000",
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                },
                transition: "all 0.3s ease",
              }}
              endIcon={<FaRocket />}
            >
              🚀 Start Your SEO Journey
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default SEO;
