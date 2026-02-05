"use client";
import React from "react";
import { ColourfulText } from "../component/ui/colourful-text";
import { motion } from "motion/react";

export function ColourfulTextDemo() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        Our website is <ColourfulText text="under construction" /> <br /> 
        Coming soon with something amazing
      </h1>
    </div>
  );
}