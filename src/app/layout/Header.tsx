"use client";

import * as React from "react";
import Image from "next/image";
import Submenu from "./Submenu";
import { menu } from "../data";
import PhoneIcon from "../assets/svg/PhoneIcon";

interface DropdownState {
  isVisible: boolean;
  type: string;
}

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = React.useState<DropdownState>(
    {
      isVisible: false,
      type: "",
    }
  );
  const [scrollY, setScrollY] = React.useState(0);
  const [isMenuMobile, setIsMenuMobile] = React.useState<boolean>(false);
  const refA = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    const newState = { ...isDropdownVisible };
    newState.isVisible = true;
    newState.type = menu;
    setDropdownVisible(newState);
  };

  const handleMouseLeave = () => {
    const newState = { ...isDropdownVisible, isVisible: false };
    setDropdownVisible(newState);
  };

  const handleClick = () => {
    if (refA.current) {
      refA.current.focus();
    }
  };
  const handleLeave = () => {
    if (refA.current) {
      refA.current.blur();
    }
  };

  const headerBgClass =
    scrollY > 150
      ? "lg:bg-slate-50 shadow-xl bg-stone-50 text-stone-950"
      : "lg:bg-transparent bg-stone-50 lg:text-white";

  return (
    <header
      className={`${headerBgClass} flex w-full h-20 lg:h-14 z-50 fixed top-0 py-4 lg:py-0 px-2.5`}
    >
      <div className="lg:container mx-auto flex items-center justify-between w-full px-4 lg:px-0">
        <a
          href="/"
          ref={refA}
          onMouseEnter={handleClick}
          onMouseLeave={handleLeave}
        >
          <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        </a>
        <nav className="h-full flex items-center w-fit hidden lg:block">
          <ul className="flex items-center w-full h-full">
            {menu.map((el, i) => {
              return (
                <li
                  key={i}
                  className="h-[105%] flex items-center relative group hover:text-green-600 transition duration-300 px-4 mx-2.5"
                  onMouseEnter={() => handleMouseEnter(el.titleName)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="cursor-pointer" href={el.titleHref}>
                    {el.titleName}{" "}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primaryGreen"></span>
                  </a>
                  {isDropdownVisible.isVisible &&
                    isDropdownVisible.type === el.titleName && (
                      <Submenu arrayOfSubmenu={el.arraySubmenu} />
                    )}
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href="tel:0614904645"
          className="hidden lg:flex space-x-2 items-center bg-stone-50 px-4 py-2 rounded text-slate-950 hover:bg-primaryGreen hover:text-white transition duration-300"
        >
          <PhoneIcon />
          <span>06 14 90 46 45</span>
        </a>

        <button
          className="w-14 h-14 shadow-lg rounded-full lg:hidden"
          onClick={() => {
            setIsMenuMobile(!isMenuMobile);
          }}
          role="button"
        >
          <div
            className={`inset-0 w-6 h-0.5 flex items-center justify-center bg-primaryGreen transition duration-400 m-auto rounded ${
              isMenuMobile ? "rotate-45" : ""
            }`}
          ></div>
          <div
            className={`inset-0 w-6 h-0.5 flex items-center justify-center bg-primaryGreen transition duration-400 m-auto rounded ${
              isMenuMobile ? " -rotate-45 !-mt-0.5" : "mt-1"
            }`}
          ></div>
          <div
            className={`inset-0 w-6 h-0.5 flex items-center justify-center bg-primaryGreen transition duration-400 m-auto rounded ${
              isMenuMobile ? " -rotate-45 !-mt-0.5" : "mt-1"
            }`}
          ></div>
        </button>

        <nav
          className={`lg:hidden w-screen h-screen right-0 top-[80px] absolute lg:hidden flex py-4 bg-slate-50 transform transition-transform duration-500 menu-mobile-bg ${
            isMenuMobile ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col w-full h-full">
            {menu.map((el, i) => {
              return (
                <li
                  key={i}
                  className="items-center bg-transparent group hover:text-green-600 px-4 m-2.5 "
                  onMouseEnter={() => handleMouseEnter(el.titleName)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className="cursor-pointer text-lg font-semibold lg:font-normal lg:text-base"
                    href={el.titleHref}
                  >
                    {el.titleName}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primaryGreen"></span>
                  </a>
                  <Submenu arrayOfSubmenu={el.arraySubmenu} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
