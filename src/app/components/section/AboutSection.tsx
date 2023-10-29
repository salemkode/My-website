"use client";

import React, { MouseEventHandler, useRef } from "react";

function calculatePercentage(x: number): number {
  if (x > 40 && x < 60) {
    return x;
  } else if (x < 50) {
    return x * 1.2;
  } else {
    return x * 0.9;
  }
}

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleSize = 130;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!containerRef.current) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const { width, height } = containerRef.current?.getBoundingClientRect();

    const x = Math.round(((ev.clientX - rect.left) / width) * 100);
    const y = Math.round(((ev.clientY - rect.top) / height) * 100);

    containerRef.current.style.setProperty(
      "--x",
      `min(${calculatePercentage(x)}%)`,
    );
    containerRef.current.style.setProperty(
      "--y",
      `${Math.max(Math.min(calculatePercentage(y), 85), 15)}%`,
    );
  };

  return (
    <div className="container flex min-h-[80vh] flex-col justify-center py-16">
      <div
        ref={containerRef}
        className="relative flex-1 w-full py-8 text-4xl md:text-6xl font-display mx-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          containerRef.current?.style.setProperty("--size", "0px");
        }}
        onMouseEnter={() => {
          containerRef.current?.style.setProperty("--size", `${circleSize}px`);
        }}
      >
        <p className="px-6 md:px-12 absolute inset-0 flex flex-col justify-center z-10">
          <b>Creating digital</b>
          magic, pixel by pixel.
        </p>
        <p
          style={{
            clipPath: `circle(var(--size) at var(--x) var(--y))`,
          }}
          className="px-6 md:px-12 absolute inset-0 flex flex-col justify-center bg-primary text-white z-20 transition-all ease-linear"
        >
          <b>Turning visions</b>
          into interactive web realities.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
