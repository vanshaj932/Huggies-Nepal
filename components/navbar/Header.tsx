"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="bg-sky-100 py-3">
      <div className="flex">
        {/* Logo Section */}
        <div className="flex items-center justify-center pr-[25%]">
          <Link href="/">
            <Image
              src="/assets/images/main-logo.webp"
              alt="Logo"
              height={125}
              width={125}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="space-x-8 absolute left-1/2 transform -translate-x-1/2 hidden tablet:flex">
          <li>
            <Link
              href="/"
              className="text-gray-700 font-extrabold font-serif text-base px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="text-gray-700 font-extrabold font-serif text-base px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-500"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 font-extrabold font-serif text-base px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-500"
            >
              About
            </Link>
          </li>
        </ul>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
