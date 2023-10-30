"use client";

import NextArrow from "@assets/images/next-arrow.svg";
import Image from "next/image";
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

    containerRef.current.style.setProperty("--x", `${x}%`);
    containerRef.current.style.setProperty(
      "--y",
      `${Math.max(Math.min(y, 85), 20)}%`,
    );
  };

  const setSize = (size: string) => {
    containerRef.current?.style.setProperty("--size", size);
  };

  return (
    <div className="container flex w-full justify-center py-40">
      <div
        className="relative mx-auto h-[300px] w-full rounded-xl border-2 py-8 font-display text-2xl sm:text-4xl md:text-6xl"
        onMouseEnter={() => setSize(`${circleSize}px`)}
        onMouseLeave={() => setSize("0px")}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <p className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
          <b>Creating digital</b>
          magic, pixel by pixel.
        </p>
        <p
          className="absolute inset-0 z-20 flex flex-col justify-center rounded-xl bg-primary px-6 text-white transition-all ease-linear md:px-12 "
          onClick={() => {
            containerRef.current?.style.removeProperty("transitionDuration");
            setSize(`${circleSize}px`);
          }}
          style={{
            clipPath: `circle(var(--size, 0px) at var(--x, 50%) var(--y, 50%))`,
          }}
        >
          <b>Code as art,</b>
          where every line matters.
        </p>
        <Image
          alt="Show next message"
          className="absolute bottom-8 left-1/2 z-30 w-10 -translate-x-1/2 translate-y-1/2 transform cursor-pointer hover:invert"
          onClick={() => {
            if (!containerRef.current) return;
            setSize("200%");
            containerRef.current.style.transitionDuration = "2s";
          }}
          src={NextArrow}
        />
      </div>
    </div>
  );
};

export default AboutSection;
