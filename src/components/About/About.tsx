"use client";

import React, { useRef } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import whiteLogo from "@assets/logo/SVG/white.svg";

const About: React.FC = () => {
  // Refs for the two sections
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  // Use InView hook to check visibility of each section
  const firstSectionInView = useInView(firstSectionRef, { once: true });
  const secondSectionInView = useInView(secondSectionRef, { once: true });

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        backgroundColor: "#07020A",
        minHeight: "100vh",
        paddingTop: { xs: "2rem", md: "6rem" },
        paddingBottom: { xs: "2rem", md: "6rem" },
      }}
    >
      {/* First Section */}
      <Box ref={firstSectionRef}>
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
              style={{ margin: "3rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#F3F4F6", // Light text for contrast
                  fontSize: { xs: "16px", md: "24px" },
                }}
              >
                Bienvenido a
              </Typography>

              <Image
                src={whiteLogo}
                alt="Main Logo"
                width={200}
                height={200}
                style={{
                  marginBottom: "2rem",
                  maxWidth: "100%",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "1.8",
                  color: "#E5E7EB", // Slightly lighter text for readability
                }}
              >
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  Space App es la red estudiantil diseñada para conectar y
                  potenciar la comunidad universitaria.
                </span>{" "}
                Imagina un espacio donde puedes mantenerte al día con las
                noticias y eventos más importantes de tu campus, ofrecer tus
                servicios como freelancer o emprendedor, y descubrir nuevas
                oportunidades de colaboración. Space App facilita la compra y
                venta de productos entre estudiantes, publica opciones de renta
                cerca de tu universidad y crea conexiones valiosas para impulsar
                tus proyectos y metas personales.
                <br />
                <br />
                Nuestro propósito es{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  hacer que estas interacciones sean seguras, accesibles y
                  efectivas,
                </span>{" "}
                actuando como un puente entre quienes buscan oportunidades y
                quienes tienen algo que ofrecer. Aunque no gestionamos
                directamente las transacciones,{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  Space App
                </span>{" "}
                conecta talentos, necesidades y proyectos en un solo lugar.
              </Typography>
            </motion.div>
          </Grid>

          {/* Floating Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingTop: "0px !important", // Forzar eliminación del padding-top
              marginTop: 0, // Si hay margin-top, también lo eliminamos por si acaso
            }}
          >
            <iframe
              src={
                isMobile
                  ? "https://my.spline.design/worldplanetcopy-22e4e4ba3ecda786ba342fc3786fe393/"
                  : "https://my.spline.design/worldplanet-334b6371a45be1e8734eb4a3da0f21b8/"
              }
              style={{
                width: "100%",
                height: isMobile ? "350px" : "600px", // Adjust height based on screen size
                border: "none",
                backgroundColor: "transparent",
              }}
              allow="fullscreen"
            ></iframe>
          </Grid>
        </Grid>
      </Box>

      {/* Second Section */}
      <Box
        ref={secondSectionRef}
        sx={{
          px: { xs: "2rem", md: "6rem" },
          mt: { xs: "4rem", md: "6rem" },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction="column-reverse" // Ensure the image comes below the text
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" }, // Stack on mobile
          }}
        >
          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <iframe
              src={
                isMobile
                  ? "https://my.spline.design/trailscopy-a484b8e0364891f87b962adcf84d06a6/"
                  : "https://my.spline.design/trails-130eeddde06ffcaa1c246ca10126758b/"
              }
              style={{
                width: "100%",
                height: isMobile ? "350px" : "600px", // Adjust height based on screen size
                border: "none",
                backgroundColor: "transparent",
              }}
              allow="fullscreen"
            ></iframe>
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
                  color: "#E5E7EB",
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
                  color: "#F3F4F6",
                  fontSize: { xs: "24px", md: "48px" },
                  marginBottom: "1rem",
                  textAlign: "right",
                }}
              >
                Comunidad Estudiantil
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "1.8",
                  color: "#E5E7EB",
                  textAlign: "right",
                }}
              >
                En esta fase inicial, Space App está diseñada específicamente
                para estudiantes del{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  Tecnológico de Monterrey, Campus CCM
                </span>
                . Nuestro objetivo es construir una comunidad sólida y activa
                que permita a los estudiantes explorar todas las posibilidades
                que la plataforma ofrece.
                <br />
                <br />
                Este lanzamiento marca el{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  primer paso
                </span>{" "}
                hacia la creación de una red universitaria completamente
                conectada, donde las ideas fluyen, las colaboraciones nacen y
                las oportunidades crecen.
                <br />
                <br />
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  ¡Únete a Space App!
                </span>{" "}
                Sé parte de la revolución que está transformando la forma en que
                los estudiantes colaboran, innovan y crecen juntos en un entorno
                seguro y dinámico.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
