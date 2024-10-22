"use client";

import closeImage from "@/assets/images/close.svg";
import menuImage from "@/assets/images/menu.svg";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "../constants";

interface INavLinks {
  id: number;
  name: string;
  href: string;
}

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }: INavLinks) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Misbahul Haq
          </a>
          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              src={isOpen ? closeImage : menuImage}
              alt="toggle"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
