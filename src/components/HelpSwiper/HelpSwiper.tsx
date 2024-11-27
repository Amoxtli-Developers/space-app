"use client";

import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const HelpSwiper: React.FC = () => {
  const items = [
    {
      title: "Conexiones Valiosas",
      description:
        "Descubre estudiantes con intereses y habilidades que complementen tus proyectos. Crea conexiones auténticas y lleva tus ideas al siguiente nivel.",
    },
    {
      title: "Oportunidades de Crecimiento",
      description:
        "Participa en colaboraciones y experiencias diseñadas para desarrollar nuevas competencias, explorar intereses y fortalecer tu carrera.",
    },
    {
      title: "Noticias On Campus",
      description:
        "Mantente informado con los eventos, actividades y noticias más relevantes de tu universidad en tiempo real.",
    },
    {
      title: "Marketplace Estudiantil",
      description:
        "Compra, vende o intercambia productos y servicios en un entorno seguro, accesible y diseñado para estudiantes.",
    },
    {
      title: "Freelancers y Emprendedores",
      description:
        "Promociona tus habilidades, servicios o proyectos. Encuentra clientes, socios y oportunidades para impulsar tu negocio dentro del campus.",
    },
    {
      title: "Espacios y Roomies",
      description:
        "Encuentra el lugar ideal cerca de tu campus o publica espacios disponibles. Conecta con roomies que compartan tu estilo de vida.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        sx={{
          mt: { xs: "4rem", md: "6rem" },
          px: { xs: "2rem", md: "6rem" },
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            marginBottom: "2rem",
            color: "#2C2C2C",
            textAlign: "center",
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          Cómo te ayuda <span style={{ color: "#6c63ff" }}>SPACE</span> en tu
          vida universitaria
        </Typography>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          style={{
            paddingBottom: "2rem",
            padding: "2rem",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Staggered animation
                  ease: "easeOut",
                }}
              >
                <Card
                  sx={{
                    borderRadius: "50px",
                    px: { xs: "1rem", md: "1.5rem" },
                    py: { xs: "2rem", md: "4rem" },
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, background 0.3s",
                    "&:hover": {
                      background:
                        "linear-gradient(270deg, rgba(115, 115, 255, 0.35) 0%, rgba(245, 204, 255, 0.35) 100%)",
                    },
                    height: "100%",
                    maxWidth: { xs: "300px", md: "unset" }, // Control card width on mobile
                    margin: { xs: "0 auto", md: "unset" }, // Center on smaller screens
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: "1rem",
                      color: "#2C2C2C",
                      fontSize: { xs: "16px", md: "24px" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4B5563",
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons */}
          <div
            className="swiper-button-prev"
            style={{
              color: "#7373FF",
              fontSize: "12px",
              position: "absolute",
              top: "50%",
              left: "10px",
              zIndex: 10,
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          ></div>
          <div
            className="swiper-button-next"
            style={{
              color: "#7373FF",
              fontSize: "24px",
              position: "absolute",
              top: "50%",
              right: "10px",
              zIndex: 10,
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          ></div>
        </Swiper>
      </Box>
    </motion.div>
  );
};

export default HelpSwiper;
