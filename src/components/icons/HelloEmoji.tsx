"use client";

import HandIcon from "@/assets/images/hand.png";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const HelloEmoji = () => {
  const emojiRef = useRef<HTMLImageElement>(null);

  const handleOverlay = () => {
    gsap
      .timeline({
        repeat: 3,
      })
      .to(emojiRef.current, {
        rotate: 25,
        duration: 0.2,
        ease: "linear",
      })
      .to(emojiRef.current, {
        rotate: 0,
        duration: 0.2,
        ease: "linear",
      });
  };

  return (
    <Image
      ref={emojiRef}
      alt="Hand emoji icon for hi"
      className="w-[25px] transition-[rotate] sm:w-[35px] md:w-[40px]"
      height={40}
      src={HandIcon.src}
      width={40}
      onMouseEnter={handleOverlay}
    />
  );
};

export default HelloEmoji;
