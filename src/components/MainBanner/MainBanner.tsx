"use client";

import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import mainLogo from "@assets/logo/SVG/main.svg";
import Image from "next/image";

const MainBanner: React.FC = () => {
  const phrases = [
    "Crea tu propia red de conexión en tu universidad.",
    "Descubre una nueva forma de conectar en la universidad.",
    "Un espacio donde las relaciones universitarias se hacen realidad.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Start with opacity 0 and slight downward shift
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 1, ease: "easeOut" }} // Control the timing of the animation
    >
      <Box
        sx={{
          height: "100vh",
          padding: { xs: 0, sm: "2rem" }, // No padding on mobile
          mb: { xs: 0, md: "2rem" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 0, sm: "2rem" }, // No padding on mobile
            height: "100%",
            background:
              "url('/assets/background/back.png') center / cover no-repeat",
            borderRadius: { xs: 0, sm: "50px" }, // No border radius on mobile
            boxShadow: {xs: "none", md: "0px 15px 50px 0px rgba(0, 0, 0, 0.25)"},
            backdropFilter: "blur(2px)",
            position: "relative",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(251, 251, 251, 0.30)",
              borderRadius: { xs: 0, sm: "50px" }, // No border radius on mobile
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
              gap: "1.5rem",
              maxWidth: "1000px",
              px: { xs: "1rem", sm: "2rem", md: "3rem" }, // Responsive horizontal padding
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#4B5563",
                textAlign: "center",
                fontSize: { xs: "16px", sm: "18px", md: "19px" }, // Responsive font size
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              La primera red social para conectar en tu Campus
            </Typography>
            <Box
              sx={{
                width: { xs: "200px", sm: "300px", md: "500px" }, // Responsive logo width
                height: "auto",
              }}
            >
              <Image src={mainLogo} alt="Main Logo" width={500} height={500} />
            </Box>

            {/* Dynamic text with Swiper */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "300px", sm: "500px", md: "1500px" }, // Responsive Swiper max width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000, // Time between transitions (ms)
                  disableOnInteraction: true,
                }}
                loop={true}
                allowTouchMove={true} // Enable touch swipe
                slidesPerView={1}
                style={{
                  width: "100%", // Ensure Swiper takes full width
                }}
              >
                {phrases.map((phrase, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        height: { xs: "100px", md: "300px" }, // Responsive height: 100px for mobile, 300px for larger screens
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: "#2C2C2C",
                        textAlign: "center",
                        fontSize: { xs: "24px", sm: "36px", md: "64px" }, // Responsive font size
                        lineHeight: "normal",
                      }}
                    >
                      {phrase}
                    </Typography>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* Input and Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                maxWidth: { xs: "300px", sm: "400px", md: "500px" }, // Responsive max width
              }}
            >
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                    height: "48px",
                    "& fieldset": {
                      borderColor: "#7373FF", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#7373FF", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7373FF", // Border color on focus
                      borderWidth: "2px", // Optional: Increase border width on focus
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#7373FF",
                  opacity: 0.3,
                  color: "#fff",
                  padding: { xs: "0.5rem 1rem", sm: "0.8rem 2rem" }, // Responsive padding
                  borderRadius: "25px",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#5a55e3",
                  },
                }}
              >
                Unirse
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#4B5563",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "15px" }, // Responsive font size
              }}
            >
              Recibe una notificación cuando SPACE esté disponible
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default MainBanner;
