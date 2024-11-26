"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "¿Cómo puedo registrarme en la app y crear mi perfil?",
      answer:
        "Para registrarte, descarga la app desde tu tienda de aplicaciones, haz clic en 'Crear cuenta', completa tus datos y personaliza tu perfil.",
    },
    {
      question: "¿Es seguro compartir información en la plataforma?",
      answer:
        "Sí, la plataforma utiliza protocolos de seguridad para proteger tus datos personales y garantizar una experiencia segura.",
    },
    {
      question:
        "¿Cómo puedo publicar un servicio o producto en el marketplace?",
      answer:
        "Ingresa a la sección 'Marketplace', selecciona 'Publicar', completa los detalles del producto o servicio y ¡listo!",
    },
    {
      question: "¿Qué debo hacer si encuentro un problema con la app?",
      answer:
        "Puedes contactar a soporte técnico desde la sección 'Ayuda' en la app, o enviarnos un correo con los detalles del problema.",
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        padding: { xs: "1.5rem", md: "4rem" },
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        mb: { xs: 0, md: "6rem" },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          marginBottom: "2rem",
          color: "#2C2C2C",
          fontSize: { xs: "24px", md: "32px" },
        }}
      >
        Resolvamos tus preguntas juntos
      </Typography>

      {/* FAQs */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            "&.MuiAccordion-root": {
              borderRadius: "30px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              marginBottom: "1rem",
              "&:before": { display: "none" }, // Removes the default divider line
              ...(index === 0 && {
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
              }),
              ...(index === faqs.length - 1 && {
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }),
            },
            borderRadius: "15px",
            boxShadow: "none",
            border: "1px solid #e5e7eb",
            marginBottom: "1rem",
            "&:before": { display: "none" }, // Removes the default divider line
            ...(index === 0 && {
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
            }),
            ...(index === faqs.length - 1 && {
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
            }),
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#6c63ff" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              "& .MuiAccordionSummary-content": {
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                color: "#4B5563",
              },
            }}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#4B5563",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQs;
