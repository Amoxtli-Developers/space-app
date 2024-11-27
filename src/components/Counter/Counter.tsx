"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

const Counter: React.FC = () => {
  const targetDate = useMemo(() => new Date("2025-03-01T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box
      sx={{
        mt: { xs: "4rem", md: "6rem" },
        px: { xs: "2rem", md: "6rem" },
        textAlign: "center",
        mb: "4rem",
      }}
    >
      <Grid container spacing={4}>
        {/* Top Row */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Card
              sx={{
                padding: "2rem",
                py: "6rem",
                borderRadius: "50px",
                border: "1px solid #7373FF",
                boxShadow: "none",
                height: "100%",
                alignContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#6c63ff",
                  fontSize: { xs: "80px", md: "128px" },
                  textShadow: "0px 15px 30px #F5CCFF",
                }}
              >
                Muy <br />
                Pronto
              </Typography>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Card
              sx={{
                padding: "2rem",
                py: "6rem",
                borderRadius: "50px",
                border: "1px solid #7373FF",
                boxShadow: "none",
                height: "100%",
                alignContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#6c63ff",
                  fontSize: { xs: "80px", md: "128px" },
                  textShadow: "0px 15px 15px #F5CCFF",
                }}
              >
                1 mar.
                <br />
                2025
              </Typography>
            </Card>
          </motion.div>
        </Grid>

        {/* Bottom Row */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Card
              sx={{
                padding: "2rem",
                py: "4rem",
                borderRadius: "50px",
                border: "1px solid #7373FF",
                boxShadow: "none",
                height: "100%",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {/* Days */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#6c63ff",
                      fontSize: { xs: "40px", md: "128px" },
                      textShadow: "0px 15px 15px #F5CCFF",
                    }}
                  >
                    {timeLeft.days}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "#7373FF",
                      opacity: 0.5,
                      fontSize: { xs: "14px", md: "40px" },
                    }}
                  >
                    días
                  </Typography>
                </Box>

                {/* Hours */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#6c63ff",
                      fontSize: { xs: "40px", md: "128px" },
                      textShadow: "0px 15px 15px #F5CCFF",
                    }}
                  >
                    {timeLeft.hours}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "#7373FF",
                      opacity: 0.5,
                      fontSize: { xs: "14px", md: "40px" },
                    }}
                  >
                    horas
                  </Typography>
                </Box>

                {/* Minutes */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#6c63ff",
                      fontSize: { xs: "40px", md: "128px" },
                      textShadow: "0px 15px 15px #F5CCFF",
                    }}
                  >
                    {timeLeft.minutes}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "#7373FF",
                      opacity: 0.5,
                      fontSize: { xs: "14px", md: "40px" },
                    }}
                  >
                    minutos
                  </Typography>
                </Box>

                {/* Seconds */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#6c63ff",
                      fontSize: { xs: "40px", md: "128px" },
                      textShadow: "0px 15px 15px #F5CCFF",
                    }}
                  >
                    {timeLeft.seconds}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "#7373FF",
                      opacity: 0.5,
                      fontSize: { xs: "14px", md: "40px" },
                    }}
                  >
                    segundos
                  </Typography>
                </Box>
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Counter;
