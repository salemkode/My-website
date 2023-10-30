"use client";

import { cn } from "@/lib/cn";
import NextArrow from "@assets/images/next-arrow.svg";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circleSize, setCircleSize] = useState("0" as "0" | "130px" | "200%");

  const handleMouseMove = (ev: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const { width, height } = containerRef.current.getBoundingClientRect();

    const x = Math.round(((ev.clientX - rect.left) / width) * 100);
    const y = Math.round(((ev.clientY - rect.top) / height) * 100);

    containerRef.current.style.setProperty("--x", `${x}%`);
    containerRef.current.style.setProperty(
      "--y",
      `${Math.max(Math.min(y, 85), 20)}%`,
    );
  };

  const handleMouseLeave = () => {
    if (circleSize !== "200%") setCircleSize("0");
  };

  return (
    <div className="container flex w-full justify-center py-40">
      <div
        className="relative mx-auto h-[300px] w-full rounded-xl border-2 py-8 font-display text-2xl sm:text-3xl md:text-5xl"
        onMouseEnter={() => setCircleSize("130px")}
        onMouseLeave={handleMouseLeave}
        onPointerMove={handleMouseMove}
        ref={containerRef}
        style={
          {
            "--size": circleSize,
          } as React.CSSProperties
        }
      >
        <p className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
          <b>Creating digital</b>
          magic, pixel by pixel.
        </p>
        <p
          className="absolute inset-0 z-20 flex flex-col justify-center rounded-xl bg-primary px-6 text-white transition-all duration-200 ease-linear md:px-12 "
          onClick={() => {
            containerRef.current?.style.removeProperty("transition-duration");
            setCircleSize(`130px`);
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
          className={cn(
            "absolute bottom-8 left-1/2 z-30 w-10 -translate-x-1/2 translate-y-1/2 transform cursor-pointer hover:invert",
            {
              hidden: circleSize === "200%",
            },
          )}
          onClick={() => {
            if (!containerRef.current) return;
            setCircleSize("200%");
            containerRef.current.style.transitionDuration = "2s";
          }}
          src={NextArrow}
        />
      </div>
    </div>
  );
};

export default AboutSection;
