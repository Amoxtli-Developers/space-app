"use client";

import { NextPage } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Asegúrate de que este archivo existe
import { Box } from "@mui/material";
import MinBanner from "@components/MainBanner/MainBanner";
import About from "@components/About/About";
import Discover from "@components/Discover/Discover";
import HelpSwiper from "@components/HelpSwiper/HelpSwiper";
import Counter from "@components/Counter/Counter";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <MinBanner />
        <About />
        <Discover />
        <HelpSwiper />
        <Counter />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
