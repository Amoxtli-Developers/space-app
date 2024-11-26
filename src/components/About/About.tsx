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
                Bienvenido a
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
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: "1.8",
                  color: "#4B5563",
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
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: "1.8",
                  color: "#4B5563",
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
                Al enfocarnos en este grupo piloto, podemos garantizar un
                ambiente seguro y controlado para probar y optimizar las
                funcionalidades de la plataforma, al tiempo que ayudamos a los
                estudiantes a{" "}
                <span style={{ fontWeight: 600, color: "#6c63ff" }}>
                  expandir sus redes de contacto y potenciar su desarrollo
                  personal y profesional.
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
