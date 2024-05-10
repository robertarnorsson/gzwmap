"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { TDecorateOptionsFn } from "react-canvas-confetti/dist/types";

const Fireworks = dynamic(() => import("react-canvas-confetti/dist/presets/fireworks"));
const Pride = dynamic(() => import("react-canvas-confetti/dist/presets/pride"));

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const decorateOptions: TDecorateOptionsFn = (options) => {
    // Modify the options as needed
    const colors = [
      "#FF3E3E", // Red
      "#FFD700", // Gold
      "#7CFC00", // Lawn Green
      "#00BFFF", // Deep Sky Blue
      "#9400D3", // Dark Violet
      "#FF1493", // Deep Pink
      "#00FF7F", // Spring Green
      "#00CED1", // Dark Turquoise
      "#FF6347", // Tomato
      "#8A2BE2", // Blue Violet
    ];
    const selectedColors: string[] = [];
  
    while (selectedColors.length < 3) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];
      if (!selectedColors.includes(color)) {
        selectedColors.push(color);
      }
    }
  
    return {
      ...options,
      colors: selectedColors,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="z-50 p-4 md:p-8 bg-muted/20 rounded-xl backdrop-blur-md text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-primary mb-4">Thank You for Donating!</h1>
        <p className="text-base md:text-lg text-primary mb-6">Your contribution means a lot to us.</p>
        <a href="/" className="text-sm md:text-base text-muted-foreground underline">Back to the map</a>
      </div>
      {isMobile
        ? <Pride
            autorun={{ speed: 10 }}
            decorateOptions={decorateOptions}
          />
        : <Fireworks
            autorun={{ speed: 2 }} 
            decorateOptions={decorateOptions}
          />
      }
    </div>
  );
}
