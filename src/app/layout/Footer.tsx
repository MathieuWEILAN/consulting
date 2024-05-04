"use client";
import BlockForm from "../components/blocks/BlockForm";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 w-full">
      <BlockForm />
      <div className="container w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 text-slate-950"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Audicée
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-950 sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="flex text-sm text-slate-950 sm:text-center justify-center">
          © {year} &nbsp;
          <a href="https://flowbite.com/" className="hover:underline">
            Audicée
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
