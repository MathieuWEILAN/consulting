"use client";

import * as React from "react";
import Submenu from "./Submenu";
import { menu } from "../data";
import PhoneIcon from "../assets/svg/PhoneIcon";
import LogoIcon from "../assets/svg/LogoIcon";
import Link from "next/link";

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

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass = scrollY > 150;

  return (
    <>
      {/* HEADER */}
      <header
        className={`${
          headerBgClass
            ? "lg:bg-slate-50 shadow-xl text-stone-950"
            : "lg:bg-transparent lg:text-white"
        } flex w-full h-20 z-50 fixed top-0 py-8 lg:py-0 pr-2.5 lg:px-2.5 text-lg bg-stone-50`}
      >
        <div className="lg:container mx-auto flex items-center justify-between w-full pr-4 lg:px-4 lg:px-0">
          <a href="/">
            {/* Mobile logo */}
            <LogoIcon
              className="lg:hidden"
              fill="#000"
              width={"170"}
              height={"auto"}
            />
            {/* Desktop logo */}
            <LogoIcon
              className="hidden lg:block"
              fill={scrollY > 150 ? "#000" : "#fff"}
              width={"170"}
              height={"auto"}
            />
          </a>

          {/* Desktop menu */}
          <nav className="h-full flex items-center w-fit hidden lg:block">
            <ul className="flex items-center w-full h-full">
              {menu.map((el, i) => (
                <li
                  key={i}
                  className={`h-[105%] flex items-center relative group ${
                    headerBgClass
                      ? "hover:text-green-600"
                      : "hover:text-stone-50"
                  } transition duration-300 px-4 mx-2.5`}
                >
                  <Link className="cursor-pointer" href={el.titleHref}>
                    {el.titleName}
                    <span
                      className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 ${
                        headerBgClass ? "bg-green-600" : "bg-stone-50"
                      }`}
                    />
                  </Link>
                  {isDropdownVisible.isVisible &&
                    isDropdownVisible.type === el.titleName && (
                      <Submenu arrayOfSubmenu={el.arraySubmenu} />
                    )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone & burger */}
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
              onClick={() => setIsMenuMobile(!isMenuMobile)}
              role="button"
              aria-label="menu mobile"
            >
              <div
                className={`inset-0 w-6 h-0.5 bg-primaryGreen transition duration-400 m-auto rounded ${
                  isMenuMobile ? "rotate-45" : ""
                }`}
              />
              <div
                className={`inset-0 w-6 h-0.5 flex items-center justify-center bg-primaryGreen transition duration-400 m-auto rounded ${
                  isMenuMobile ? " -rotate-45 !-mt-0.5" : "mt-1"
                }`}
              ></div>
              <div
                className={`inset-0 w-6 h-0.5 bg-primaryGreen transition duration-400 m-auto rounded ${
                  isMenuMobile ? "-rotate-45 !-mt-0.5" : "mt-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV (placé EN DEHORS du header) */}
      <nav
        className={`lg:hidden z-40 w-screen shadow-lg absolute top-20 left-0 flex bg-slate-50 transform transition-transform duration-500 ${
          isMenuMobile ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col w-full h-full py-4">
          {menu.map((el, i) => (
            <li
              key={i}
              className="items-center bg-transparent group hover:text-green-600 px-4 m-2.5"
            >
              <a
                className="cursor-pointer text-lg font-semibold"
                href={el.titleHref}
              >
                {el.titleName}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primaryGreen" />
              </a>
              <Submenu arrayOfSubmenu={el.arraySubmenu} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
