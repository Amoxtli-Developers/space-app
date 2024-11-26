"use client";

import React from "react";
import dynamic from "next/dynamic";
import { CircularProgress, Box } from "@mui/material";

// Cargar Spline dinámicamente con `ssr: false`
const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false,
});

const DesktopSpline: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "600px" }}>
          <CircularProgress />
        </Box>
      }
    >
      <Spline
        scene="https://prod.spline.design/jyaInMLxedHjlLZI/scene.splinecode"
        style={{ height: "600px", width: "100%" }}
      />
    </React.Suspense>
  );
};

export default DesktopSpline;
