"use client";
import { useEffect, useState } from "react";
import SlideUpDown from "@components/SlideUpDown";
import MenuIcon from "@components/icons/MenuIcon";
import NavBarAccounts from "./NavBarAccounts";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(
    () => typeof window === "object" && document.body.offsetWidth > 752,
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeVisible = () => {
      setShowDropdown(() => document.body.offsetWidth > 752);
    };
    const changeScroll = () => {
      setScrolled(() => window.scrollY !== 0);
    };

    changeScroll();
    changeVisible();
    window.addEventListener("resize", changeVisible);
    window.addEventListener("scroll", changeScroll);

    return () => {
      window.removeEventListener("resize", changeVisible);
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 z-50 py-4 font-bold backdrop-blur-lg transition">
      <nav className="container flex w-full flex-col items-center justify-between md:flex-row">
        <h1 className="flex w-full justify-between text-2xl md:w-auto">
          <a href="/">SalemKode</a>
          <MenuIcon onClick={() => setShowDropdown((isVisible) => !isVisible)}>
            Show
          </MenuIcon>
        </h1>
        <SlideUpDown
          closed={!showDropdown}
          className="md:block md:h-auto md:transition-none"
        >
          <NavBarAccounts />
        </SlideUpDown>
      </nav>
    </header>
  );
};

export default NavBar;
