"use client";

import EmailBtn from "../../../components/EmailBtn";
import MouseIcon from "../MouseIcon";
import AvatarImage from "@/assets/images/avatar.png";
import HandIcon from "@/assets/images/hand.png";
import TelegramIcon from "@assets/images/accounts/telegram.svg";
import Image from "next/image";
import React, { useRef } from "react";

const HeroSectionInfo = () => {
  return (
    <div className="text-lg sm:text-2xl lg:text-3xl md:w-1/2">
      <p className="my-1 flex items-center gap-1">
        <span>Hi,</span>
        <Image
          src={HandIcon.src}
          alt="Hand icon for hi"
          height={40}
          width={40}
          className="w-[25px] sm:w-[35px] md:w-[40px]"
        />
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
          target="_blank"
          className="mx-2 hidden aspect-square h-full items-center justify-center rounded-full border border-primary p-2 hover:bg-[#21242926] md:flex"
          href="https://t.me/salemkode"
        >
          <Image
            src={TelegramIcon.src}
            alt="icon of telegram"
            height={28}
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
      className="container relative flex h-screen flex-col-reverse items-center md:flex-row"
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
      <HeroSectionInfo />
      <div className="md:w-1/2">
        <Image
          className="ms-auto max-w-[70%]"
          alt="my avatar image"
          src={AvatarImage.src}
          width={AvatarImage.width}
          height={AvatarImage.height}
        />
      </div>
      <MouseIcon onClick={goNextSection} />
    </section>
  );
};

export default HeroSection;
