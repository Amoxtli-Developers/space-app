"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
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

  const [email, setEmail] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar el loader
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false); // Estado para mostrar modal de error
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false); // Estado para mostrar modal de éxito
  const [duplicateModalOpen, setDuplicateModalOpen] = useState<boolean>(false);

  // Función para validar el formato del correo
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!email || !isEmailValid(email)) {
      setErrorModalOpen(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status === 409) {
        setDuplicateModalOpen(true);
      } else if (response.ok) {
        setSubmittedEmail(email);
        setSuccessModalOpen(true);
        setEmail("");
      } else {
        setErrorModalOpen(true);
      }
    } catch {
      setErrorModalOpen(true);
    } finally {
      setLoading(false);
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
            boxShadow: {
              xs: "none",
              md: "0px 15px 50px 0px rgba(0, 0, 0, 0.25)",
            },
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
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
                disabled={!isEmailValid(email) || loading}
                sx={{
                  bgcolor: loading ? "#b3b3b3" : "#7373FF",
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
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Unirse"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal de éxito */}
      <Dialog
        open={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "50px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "24px", fontWeight: 700 }}>
          Registro exitoso
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "18px", mb: 2 }}>
            Gracias por ser parte de{" "}
            <strong style={{ color: "#7373FF" }}>Space App</strong>. Estamos muy
            contentos de tenerte a bordo.
          </Typography>
          <Typography sx={{ fontSize: "16px", mb: 2 }}>
            Se ha enviado un correo de confirmación a{" "}
            <strong style={{ color: "#7373FF" }}>{submittedEmail}</strong>.
          </Typography>
          <Typography sx={{ fontSize: "16px", mb: 2 }}>
            Tu registro te dará acceso anticipado a la versión beta de{" "}
            <strong style={{ color: "#7373FF" }}>Space App</strong>. ¡Serás uno
            de los primeros en probar esta emocionante experiencia!
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Si el correo no llega, revisa tu carpeta de spam o contacta al
            soporte en{" "}
            <strong style={{ color: "#7373FF" }}>
              soporte.spaceapp@amoxtli.tech
            </strong>
            .
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setSuccessModalOpen(false)}
            sx={{
              bgcolor: "#7373FF",
              color: "#fff",
              borderRadius: "50px",
              textTransform: "none",
              padding: "0.5rem 1rem",
            }}
          >
            ¡Entendido!
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de error */}
      <Dialog
        open={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "50px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "24px", fontWeight: 700 }}>
          Error
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "18px", mb: 2 }}>
            Lo sentimos, no se logró registrar tu correo en la lista de espera.
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Si el error persiste, contacta a nuestro equipo de soporte en{" "}
            <strong style={{ color: "#7373FF" }}>
              soporte.spaceapp@amoxtli.tech
            </strong>
            .
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setErrorModalOpen(false)}
            sx={{
              bgcolor: "#7373FF",
              color: "#fff",
              borderRadius: "50px",
              textTransform: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Volver a intentarlo
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={duplicateModalOpen}
        onClose={() => setDuplicateModalOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "50px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "24px", fontWeight: 700 }}>
          Correo ya registrado
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "16px", mb: 2 }}>
            El correo <strong style={{ color: "#7373FF" }}>{email}</strong> ya
            está registrado.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Gracias por ser parte de{" "}
            <strong style={{ color: "#7373FF" }}>Space App</strong>. Muy pronto
            recibirás noticias nuestras.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDuplicateModalOpen(false)}
            sx={{
              bgcolor: "#7373FF",
              color: "#fff",
              borderRadius: "50px",
              textTransform: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
};

export default MainBanner;
