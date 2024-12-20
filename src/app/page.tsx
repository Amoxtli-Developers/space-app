"use client";

import { NextPage } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Asegúrate de que este archivo existe
import { Box } from "@mui/material";
import MainBanner from "@components/MainBanner/MainBanner";
import About from "@components/About/About";
import Discover from "@components/Discover/Discover";
import HelpSwiper from "@components/HelpSwiper/HelpSwiper";
import Counter from "@components/Counter/Counter";
import Footer from "@components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { WavyBackgroundDemo } from "@components/WavyBackgroundDemo/WavyBackgroundDemo";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <MainBanner />
        <About />
        <Discover />
        <WavyBackgroundDemo />
        <HelpSwiper />
        <Counter />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
