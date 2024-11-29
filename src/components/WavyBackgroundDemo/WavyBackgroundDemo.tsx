"use client";
import React, { useState } from "react";
import { WavyBackground } from "@components/WavyBackground/WavyBackground";
import { Box, Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export function WavyBackgroundDemo() {
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar el hover

  return (
    <WavyBackground>
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "80%",
            lg: "70%",
            xl: "60%",
          },
          textAlign: "center", // Asegura que todo esté centrado
        }}
      >
        <p className="text-2xl md:text-4xl lg:text-7xl text-[#f0f1f6] font-bold inter-var text-center">
          Tu comunidad universitaria, a un clic de distancia.
        </p>
        <p className="text-base md:text-lg mt-4 text-[#f0f1f6] font-normal inter-var text-center">
          Conéctate, colabora y transforma tu experiencia estudiantil. Únete a
          la lista de espera ahora.
        </p>

        {/* Botón */}
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              backgroundColor: "#7373ff",
              color: "#f0f1f6",
              borderRadius: "30px",
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: "bold",
              textTransform: "none",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                backgroundColor: "#7373ff",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
            onMouseEnter={() => setIsHovered(true)} // Detecta cuando el mouse entra
            onMouseLeave={() => setIsHovered(false)} // Detecta cuando el mouse sale
            onClick={() => {
              // Smooth scroll al contenedor con el ID "home"
              const element = document.getElementById("home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {isHovered ? (
              <RocketLaunchIcon
                sx={{
                  fontSize: "24px",
                  transition: "transform 0.5s ease-out",
                }}
              />
            ) : (
              "Únete a la lista de espera"
            )}
          </Button>
        </Box>
      </Box>
    </WavyBackground>
  );
}
