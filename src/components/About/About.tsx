"use client";

import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import mainLogo from "@assets/logo/SVG/main.svg";

const About: React.FC = () => {
  // Refs for the two sections
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  // Use InView hook to check visibility of each section
  const firstSectionInView = useInView(firstSectionRef, { once: true });
  const secondSectionInView = useInView(secondSectionRef, { once: true });

  return (
    <Box>
      {/* First Section */}
      <Box
        ref={firstSectionRef}
        sx={{ padding: { xs: "2rem", md: "4rem" }, mb: { xs: 0, md: "2rem" } }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start below and invisible
              animate={firstSectionInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#4B5563",
                  fontSize: { xs: "16px", md: "24px" },
                }}
              >
                Qué es
              </Typography>
              <Image
                src={mainLogo}
                alt="Main Logo"
                width={300}
                height={300}
                style={{
                  marginBottom: "2rem",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#4B5563",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nisi augue, tincidunt in massa sit amet, commodo
                rhoncus nulla. Nullam at congue mi. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse nisi augue, tincidunt
                in massa sit amet, commodo rhoncus nulla. Nullam at congue mi.
              </Typography>
            </motion.div>
          </Grid>

          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={firstSectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              style={{
                background: "#FFFFFF",
                borderRadius: "50px",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "500px",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Second Section */}
      <Box
        ref={secondSectionRef}
        sx={{
          padding: { xs: "2rem", md: "4rem" },
          marginTop: { xs: 0, md: "4rem" },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={secondSectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                background: "#FFFFFF",
                borderRadius: "50px",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "500px",
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={secondSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#4B5563",
                  fontSize: { xs: "16px", md: "24px" },
                  textAlign: "right",
                }}
              >
                Para quién es
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#2C2C2C",
                  fontSize: { xs: "32px", md: "48px" },
                  marginBottom: "1rem",
                  textAlign: "right",
                }}
              >
                Comunidad Estudiantil
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#4B5563",
                  textAlign: "right",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nisi augue, tincidunt in massa sit amet, commodo
                rhoncus nulla. Nullam at congue mi. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse nisi augue, tincidunt
                in massa sit amet, commodo rhoncus nulla. Nullam at congue mi.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
