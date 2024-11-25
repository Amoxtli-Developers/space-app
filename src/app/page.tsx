"use client";

import { NextPage } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Asegúrate de que este archivo existe
import { Box, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
          This is a simple Next.js page with Material-UI theming.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
