"use client";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Contact", link: "#features" },
  { name: "Pricing", link: "#faq" },
  { name: "Documentation", link: "#pricing" },
  { name: "Join our Comminuty", link: "#enterprise" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-t from-slate-50 to-orange-300 dark:bg-gradient-to-t dark:from-black dark:to-orange-300 text-center text-md text-black dark:text-white p-4">
        Join our Comminuty <span>Learn More .</span>
      </div>
      <nav className="px-5 py-4 lg:px-0 lg:container flex w-screen justify-between">
        <div className="flex items-center justify-between gap-x-48">
          <div className=" font-extrabold text-3xl">TOiNGG..</div>
          <ul className="hidden lg:flex gap-x-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="font-medium text-base text-primary"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile menu */}
        {open && (
          <div className="lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-slate-100  drop-shadow-md mt-8 rounded-lg">
            <div className="flex flex-col items-center space-y-6 font-bold">
              {navLinks.map((item, index) => (
                <Link
                  onClick={() => setOpen(!open)}
                  key={index}
                  className="font-medium text-base text-primary"
                  href={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* mobile menu */}

        <Image
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          src={Menu}
          width="32"
          height="32"
          alt="menu"
        />
      </nav>
    </>
  );
};

export default Navbar;
