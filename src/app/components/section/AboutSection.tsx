"use client";

import { cn } from "@/lib/cn";
import NextArrow from "@assets/images/next-arrow.svg";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const circleStates = {
  hidden: "0",
  moving: "130px",
  fullContent: "100%",
};
const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circleState, setCircleState] = useState(
    "hidden" as keyof typeof circleStates,
  );

  const handleMouseMove = (ev: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const { width, height } = containerRef.current.getBoundingClientRect();

    const x = Math.round(((ev.clientX - rect.left) / width) * 100);
    const y = Math.round(((ev.clientY - rect.top) / height) * 100);

    gsap.to(containerRef.current, {
      "--x": `${x}%`,
      "--y": `${Math.max(Math.min(y, 85), 20)}%`,
      duration: 0.1,
      ease: "sine.out",
    });
  };

  const handleMouseEnter = () => {
    if (circleState === "hidden") setCircleState("moving");
  };

  const handleMouseLeave = () => {
    if (circleState === "moving") setCircleState("hidden");
  };

  const handleOverlayClick = () => {
    if (circleState === "fullContent") setCircleState("moving");
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      "--size": circleStates[circleState],
      duration: circleState === "hidden" ? 0.2 : 0.5,
      ease: "sine.out",
    });
  }, [circleState]);

  return (
    <div className="container flex w-full justify-center py-40">
      <div
        className="relative mx-auto h-[300px] w-full rounded-xl border-2 py-8 font-display text-2xl sm:text-3xl md:text-5xl  md:leading-snug"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerMove={handleMouseMove}
        ref={containerRef}
      >
        <p className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
          <b>Creating digital</b>
          magic, pixel by pixel.
        </p>
        <p
          className="absolute inset-0 z-20 flex flex-col justify-center rounded-xl bg-primary px-6 text-white transition-all duration-200 ease-linear md:px-12"
          onClick={handleOverlayClick}
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
            "absolute bottom-8 left-1/2 z-30 w-10 -translate-x-1/2 translate-y-1/2 transform cursor-pointer mix-blend-difference invert",
            {
              hidden: circleState === "fullContent",
            },
          )}
          onClick={() => {
            if (!containerRef.current) return;
            setCircleState("fullContent");
            containerRef.current.style.transitionDuration = "2s";
          }}
          src={NextArrow}
        />
      </div>
    </div>
  );
};

export default AboutSection;
