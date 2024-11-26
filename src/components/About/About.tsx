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
          <Grid
            item
            xs={12}
            md={6}

          >
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
                  La red estudiantil diseñada para conectar a la comunidad
                  universitaria.
                </span>{" "}
                Esta plataforma te permite ofrecer tus servicios como
                freelancer, vender productos dentro del campus, publicar
                espacios en renta cerca de la universidad y establecer
                conexiones valiosas con otros estudiantes. Nuestro propósito es{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  facilitar estas interacciones de manera segura y accesible
                </span>
                , sirviendo como un puente entre quienes buscan oportunidades y
                quienes tienen algo que ofrecer. Aunque no gestionamos
                directamente los procesos de venta o contratación,{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  conectamos talentos, necesidades y proyectos en un solo lugar.
                </span>{" "}
                Únete y transforma la forma en que interactúas con tu comunidad
                universitaria, aprovechando todo el potencial de una red hecha
                para estudiantes como tú.
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
                borderRadius: "50px",
                overflow: "hidden",
                width: "100%",
                height: "auto",
              }}
            >
              <iframe
                src="https://my.spline.design/worldplanet-334b6371a45be1e8734eb4a3da0f21b8/"
                style={{
                  width: "100%",
                  height: isMobile ? "300px" : "600px", // Adjust height based on screen size
                  border: "none",
                  backgroundColor: "transparent",
                }}
                allow="fullscreen"
              ></iframe>
            </motion.div>
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
        >
          {/* Floating Image */}
          <Grid item xs={12} md={6}>
            <iframe
              src="https://my.spline.design/particlenebula-dae7209750ac2fc00de7880cab1472e7/"
              style={{
                width: "100%",
                height: isMobile ? "300px" : "600px", // Adjust height based on screen size
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
                En esta primera etapa, la plataforma está dirigida
                exclusivamente a los estudiantes del{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  Tecnológico de Monterrey, Campus CCM
                </span>
                . Este enfoque inicial busca consolidar una comunidad sólida
                donde los estudiantes puedan explorar las múltiples
                posibilidades que ofrece la plataforma: promover servicios,
                vender productos, buscar espacios en renta y, lo más importante,{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  construir conexiones significativas dentro de su propio
                  campus.
                </span>{" "}
                Este es solo el primer paso en el camino hacia una comunidad
                universitaria más conectada. ¡Únete y sé parte del cambio que
                transformará cómo los estudiantes colaboran, crean y crecen
                juntos!
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
