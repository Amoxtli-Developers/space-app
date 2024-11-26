"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline with `ssr: false`
const Spline = dynamic(() => import("@splinetool/react-spline/next"), { ssr: false });

const StrictClientSpline: React.FC<{ scene: string; height: string; width: string }> = ({
  scene,
  height,
  width,
}) => {
  return (
    <div style={{ height, width }}>
      <Spline scene={scene} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default StrictClientSpline;
