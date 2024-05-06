"use client";
import BlockForm from "../components/blocks/BlockForm";
import Image from "next/image";
import BlockLogo from "../components/blocks/BlockLogo";
import { menu } from "../data";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 w-full">
      <BlockLogo className="pt-4" />
      <BlockForm />
      <div className="container w-full mx-auto p-4 md:py-8">
        <div className="sm:flex items-start sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 text-slate-950"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Audicée
            </span>
          </a>
          <div className="flex space-x-10 pb-8">
            <div>
              <h3>Navigation</h3>
              <ul>
                {menu.map((el, i) => {
                  return (
                    <li key={i} className="">
                      <a
                        className="cursor-pointer hover:underline"
                        href={el.titleHref}
                      >
                        {el.titleName}{" "}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3>Contact</h3>
              <a
                href="emailto:contact@audicée.fr"
                className="hover:underline cursor-pointer"
              >
                contact@audicée.fr
              </a>
              <span>06 14 90 46 45</span>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto  lg:my-4" />
        <span className="flex text-sm text-slate-950 sm:text-center justify-center">
          © {year} &nbsp;
          <Link href="/" className="hover:underline">
            Audicée
          </Link>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
