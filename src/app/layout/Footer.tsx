"use client";
import BlockForm from "../components/blocks/BlockForm";
import BlockLogo from "../components/blocks/BlockLogo";
import { menu } from "../data";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/img/audicee-logo-titre.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 w-full">
      <BlockLogo className="pt-4" />
      <BlockForm />
      <div className="container w-full mx-auto p-4 md:py-8">
        <div className="sm:flex items-start sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 text-slate-950"
          >
            <Image
              src={logo}
              alt="Vercel Logo"
              width={200}
              height={24}
              className="object-contain mx-auto mb-10"
            />
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
                href="emailto:auditenergie77@gmail.com"
                className="hover:underline cursor-pointer"
              >
                auditenergie77@gmail.com
              </a>
              <a
                href="tel:0186223185"
                className="hover:underline cursor-pointer"
              >
                01 86 22 31 85
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7+avenue+Christian+Doppier+77600+Serris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
              >
                <span>7 avenue Christian Doppier, 77600 Serris</span>
              </a>
            </div>
          </div>
        </div>
        <span className="flex text-sm text-slate-950 sm:text-center justify-center border-t border-slate-200 pt-4 lg:pt-8">
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
