"use client";

import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import mainLogo from "@assets/logo/SVG/main.svg";

const About: React.FC = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP animation for floating effect on images
    gsap.to(imageRefs.current, {
      y: -15, // Slight upward movement
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut", // Smooth easing
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* First Section */}
      <Box sx={{ padding: { xs: "2rem", md: "4rem" } }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
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
              consectetur adipiscing elit. Suspendisse nisi augue, tincidunt in
              massa sit amet, commodo rhoncus nulla. Nullam at congue mi.
            </Typography>
          </Grid>

          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={(el) => {
                if (el) imageRefs.current[0] = el;
              }}
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
      <Box sx={{ padding: { xs: "2rem", md: "4rem" }, marginTop: {xs: 0, md: "4rem"} }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={(el) => {
                if (el) imageRefs.current[1] = el;
              }}
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
              consectetur adipiscing elit. Suspendisse nisi augue, tincidunt in
              massa sit amet, commodo rhoncus nulla. Nullam at congue mi.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
