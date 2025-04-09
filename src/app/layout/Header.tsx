"use client";

import * as React from "react";
import Image from "next/image";
import Submenu from "./Submenu";
import { menu } from "../data";
import PhoneIcon from "../assets/svg/PhoneIcon";
import logo from "../assets/img/audicee-logo-titre.png";

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

  const headerBgClass = scrollY > 150 ? true : false;
  return (
    <header
      className={`${
        headerBgClass
          ? "lg:bg-slate-50 shadow-xl bg-stone-50 text-stone-950"
          : "lg:bg-transparent bg-stone-50 lg:text-white"
      } flex w-full h-20 z-50 fixed top-0 py-8 lg:py-0 px-2.5 text-lg`}
    >
      <div className="lg:container mx-auto flex items-center justify-between w-full px-4 lg:px-0">
        <a
          href="/"
          ref={refA}
          onMouseEnter={handleClick}
          onMouseLeave={handleLeave}
        >
          <Image src={logo} alt="Logo Audicée" width={70} height={70} />
        </a>
        <nav className="h-full flex items-center w-fit hidden lg:block">
          <ul className="flex items-center w-full h-full">
            {menu.map((el, i) => {
              return (
                <li
                  key={i}
                  className={`h-[105%] flex items-center relative group ${
                    headerBgClass
                      ? "hover:text-green-600"
                      : "hover:text-stone-50"
                  } transition duration-300 px-4 mx-2.5`}
                  onMouseEnter={() => handleMouseEnter(el.titleName)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="cursor-pointer" href={el.titleHref}>
                    {el.titleName}{" "}
                    <span
                      className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 ${
                        headerBgClass ? "bg-green-600" : "bg-stone-50"
                      }  `}
                    ></span>
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
        <div className="flex space-x-4">
          <a
            href="tel:0186223185"
            className="w-14 h-14 lg:w-full lg:h-auto rounded-full shadow-xl lg:rounded-lg flex space-x-2 justify-center items-center bg-stone-50 lg:px-4 lg:py-2 text-slate-950 hover:bg-primaryGreen hover:text-white transition duration-300"
          >
            <PhoneIcon />
            <span className="hidden lg:block">01 86 22 31 85</span>
          </a>
          <button
            className="w-14 h-14 shadow-xl rounded-full lg:hidden"
            onClick={() => {
              setIsMenuMobile(!isMenuMobile);
            }}
            role="button"
            name="menu mobile"
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
        </div>

        <nav
          className={`lg:hidden w-screen h-auto shadow-lg right-0 top-[80px] absolute lg:hidden flex py-4 bg-slate-50 transform transition-transform duration-500 ${
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
