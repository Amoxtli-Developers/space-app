"use client";

import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Discover: React.FC = () => {
  const features = [
    {
      title: "Conexión entre Carreras",
      description: "Colabora con estudiantes de otras áreas en proyectos.",
      icon: <SchoolIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
    {
      title: "Marketplace Estudiantil",
      description: "Compra y vende artículos en tu campus.",
      icon: <ShoppingBagIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
    {
      title: "Freelancers",
      description: "Ofrece tus habilidades y encuentra clientes.",
      icon: <WorkIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
    {
      title: "Emprendimientos en Campus",
      description: "Promociona tu negocio de comida o servicios.",
      icon: <RocketLaunchIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
    {
      title: "Búsqueda de Roomies",
      description: "Encuentra compañeros de cuarto o renta un espacio.",
      icon: <ApartmentIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
    {
      title: "Proyectos Colaborativos",
      description: "Publica tus ideas y encuentra colaboradores.",
      icon: <LightbulbIcon fontSize="large" sx={{ color: "#4B5563" }} />,
    },
  ];

  return (
    <Box sx={{ padding: { xs: "2rem", md: "4rem" }, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          marginBottom: "2rem",
          color: "#2C2C2C",
        }}
      >
        Descubre todo lo que puedes hacer
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "50px",
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                transition: "transform 0.3s, background 1s",
                textAlign: "left",
                "&:hover": {
                  transform: "translateY(-10px)",
                  background:
                    "linear-gradient(270deg, rgba(115, 115, 255, 0.35) 0%, rgba(245, 204, 255, 0.35) 100%)",
                },
                px: "2rem",
                py: "4rem",
              }}
            >
              <Box>{feature.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#4B5563",
                }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#4B5563" }}>
                {feature.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Discover;
