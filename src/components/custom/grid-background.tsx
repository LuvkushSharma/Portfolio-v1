import React from "react";
import Projects from "../projects";

export default function GridBackground() {
  return (
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 bg-white/5 dark:bg-black/5"></div> {/* Overlay for dimming */}
      <Projects />
    </div>
  );
}
