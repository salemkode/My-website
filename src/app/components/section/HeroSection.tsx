"use client";

import EmailBtn from "../../../components/EmailBtn";
import MouseIcon from "../MouseIcon";
import AvatarImage from "@/assets/images/avatar.png";
import HandIcon from "@/assets/images/hand.png";
import TelegramIcon from "@assets/images/accounts/telegram.svg";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

const HalloEmoji = () => {
  const emojiRef = useRef<HTMLImageElement>(null);

  const handleOverlay = () => {
    const from = {
      rotate: 0,
      duration: 0.2,
      ease: "linear",
    };
    const to = {
      rotate: 25,
      duration: 0.2,
      ease: "linear",
    };
    gsap
      .timeline({
        repeat: 3,
      })
      .to(emojiRef.current, to)
      .to(emojiRef.current, from);
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

interface HeroSectionInfoProps {
  className?: string;
}
const HeroSectionInfo: React.FC<HeroSectionInfoProps> = ({ className }) => {
  return (
    <div
      className={twMerge("text-lg sm:text-2xl md:w-1/2 lg:text-3xl", className)}
    >
      <p className="my-1 flex items-center gap-1">
        <span>Hi,</span>
        <HalloEmoji />
      </p>
      <p className="my-3">
        I&apos;m
        <strong className="inline-block ps-2 font-extrabold">
          Salem Shamakh
        </strong>
      </p>
      <p className="my-1">Full stack web developer</p>
      <div className="mt-4 flex items-center">
        <EmailBtn text="Ready for new opportunities, let’s talk" />
        <a
          className="mx-2 hidden aspect-square h-full items-center justify-center rounded-full border border-primary p-2 hover:bg-[#21242926] md:flex"
          href="https://t.me/salemkode"
          target="_blank"
        >
          <Image
            alt="icon of telegram"
            height={28}
            src={TelegramIcon.src}
            width={28}
          />
        </a>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const goNextSection = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="container relative flex h-screen flex-col-reverse items-center justify-center md:flex-row"
    >
      <div
        className="clip absolute left-1/2 top-1/2 -z-10 h-2/5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-xl blur-3xl"
        style={{
          background: `radial-gradient(
                        109.72% 133.34% at 66.99% 117.71%,
                        rgba(38, 232, 127, 0.3) 0%,
                        rgba(0, 163, 255, 0.3) 100%
                      )`,
        }}
      />
      <HeroSectionInfo className="md:w-2/3 lg:w-1/2" />
      <div className="md:w-1/3 lg:w-1/2">
        <Image
          alt="my avatar image"
          className="mx-auto md:ms-auto md:max-w-[90%] lg:max-w-[70%]"
          height={AvatarImage.height}
          src={AvatarImage.src}
          width={AvatarImage.width}
        />
      </div>
      <MouseIcon onClick={goNextSection} />
    </section>
  );
};

export default HeroSection;
