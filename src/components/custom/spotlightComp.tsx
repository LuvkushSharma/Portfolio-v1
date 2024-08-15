import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import Hero from "../hero";

export default function SpotlightComp() {
  return (
    <div className="rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 pointer-events-none"
        fill="white"
      />
     <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
