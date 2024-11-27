"use client";

import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import mainLogo from "@assets/logo/SVG/main.svg";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const ref = useRef(null); // Create a reference for the footer
  const isInView = useInView(ref, { once: true }); // Check if the footer is in view

  return (
    <Box
      ref={ref} // Attach the reference to the footer container
      sx={{
        height: "100vh", // Adjust the height of the footer
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "url('/assets/background/back.png') center / cover no-repeat", // Use the background image
        textAlign: "center",
        position: "relative",
        color: "#6c63ff", // Text color matching the design
        overflow: "hidden",
      }}
    >
      {/* Semi-transparent overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Overlay effect for text visibility
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Responsive Logo with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and transparent
          animate={isInView ? { opacity: 1, scale: 1 } : {}} // Animate when in view
          transition={{ duration: 1, ease: "easeOut" }} // Control animation timing
        >
          <Box
            sx={{
              width: { xs: "300px", sm: "500px", md: "800px" }, // Adjust logo size for different screens
              height: "auto",
            }}
          >
            <Image src={mainLogo} alt="SPACE Logo" layout="responsive" />
          </Box>
        </motion.div>

        {/* Subtitle with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // Add a slight delay for sequencing
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "16px", sm: "18px", md: "36px" }, // Adjust font size for different screens
              color: "#7373FF", // Purple text color
              mt: "1rem",
              cursor: "pointer", // Ensure pointer cursor for hoverable element
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline", // Add underline effect on hover
              },
            }}
            component="a" // Use Typography as a link
            href="https://www.amoxtli.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            by Amoxtli Web Developers
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Footer;
