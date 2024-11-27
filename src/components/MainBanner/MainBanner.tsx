"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import mainLogo from "@assets/logo/SVG/main.svg";
import Image from "next/image";

const MainBanner: React.FC = () => {
  const phrases = [
    "Crea tu propia red de conexión en tu universidad.",
    "Descubre una nueva forma de conectar en la universidad.",
    "Un espacio donde las relaciones universitarias se hacen realidad.",
  ];

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar el loader

  // Función para validar el formato del correo
  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validación básica de correos
  };

  const handleSubmit = async () => {
    if (!email || !isEmailValid(email)) {
      toast.error("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true); // Mostrar loader
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("¡Registro exitoso! Te notificaremos pronto.");
        setEmail("");
      } else {
        toast.error("Hubo un error. Por favor, intenta de nuevo.");
      }
    } catch (error) { //eslint-disable-line
      toast.error("Hubo un error inesperado. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false); // Ocultar loader
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        sx={{
          height: "100vh",
          padding: { xs: 0, sm: "2rem" },
          mb: { xs: 0, md: "2rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 0, sm: "2rem" },
            height: "100%",
            background:
              "url('/assets/background/back.png') center / cover no-repeat",
            borderRadius: { xs: 0, sm: "50px" },
            boxShadow: { xs: "none", md: "0px 15px 50px 0px rgba(0, 0, 0, 0.25)" },
            backdropFilter: "blur(2px)",
            position: "relative",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(251, 251, 251, 0.30)",
              borderRadius: { xs: 0, sm: "50px" },
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              maxWidth: "1000px",
              px: { xs: "1rem", sm: "2rem", md: "3rem" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#4B5563",
                textAlign: "center",
                fontSize: { xs: "16px", sm: "18px", md: "19px" },
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              La primera red social para conectar en tu Campus
            </Typography>
            <Box
              sx={{
                width: { xs: "200px", sm: "300px", md: "500px" },
                height: "auto",
              }}
            >
              <Image src={mainLogo} alt="Main Logo" width={500} height={500} />
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "300px", sm: "500px", md: "1500px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                loop
                allowTouchMove
                slidesPerView={1}
                style={{
                  width: "100%",
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
                        height: { xs: "100px", md: "300px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: "#2C2C2C",
                        textAlign: "center",
                        fontSize: { xs: "24px", sm: "36px", md: "64px" },
                        lineHeight: "normal",
                      }}
                    >
                      {phrase}
                    </Typography>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                maxWidth: { xs: "300px", sm: "400px", md: "500px" },
              }}
            >
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderRadius: "25px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                    height: "48px",
                    "& fieldset": {
                      borderColor: "#7373FF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7373FF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7373FF",
                      borderWidth: "2px",
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!isEmailValid(email) || loading} // Deshabilitar si está cargando o el email no es válido
                sx={{
                  bgcolor: loading ? "#b3b3b3" : "#7373FF", // Cambiar color cuando está cargando
                  color: "#fff",
                  padding: { xs: "0.5rem 1rem", sm: "0.8rem 2rem" },
                  borderRadius: "25px",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: loading ? "#b3b3b3" : "#5a55e3",
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Unirse"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default MainBanner;
