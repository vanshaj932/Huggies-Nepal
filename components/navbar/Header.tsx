"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MobileNav from "./MobileNav";

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    // Open the link in a new tab
    window.open(
      "https://www.daraz.com.np/baby-diapers/huggies",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <nav className="hidden w-full tablet:block">
        {/* First Section */}
        <div className="bg-[#c3e7e7] h-[5vh] flex justify-between items-center px-4 tablet:px-6">
          <div className="flex items-center justify-center pr-[25%] py-10">
            <Link href="/">
              <Image
                src="/assets/images/main-logo.webp"
                alt="Huggies Logo"
                height={125}
                width={125}
                className="cursor-pointer !h-[150px] !w-[175px]"
                priority
              />
            </Link>
          </div>

          <div className="hidden tablet:flex space-x-6">
            <Link
              href="mailto:email@test.com"
              className="text-black text-md flex hover:text-gray-200 font-serif"
            >
              <EmailIcon className="text-blue-500" />
              <p className="text-black">email@test.com</p>
            </Link>
            <Link
              href="tel:02-026-6597"
              className="text-black flex hover:text-gray-200 font-serif"
            >
              <CallIcon className="text-blue-500" />
              02-026-6597
            </Link>
          </div>
          {/* <MobileNav /> */}
        </div>

        {/* Second Section */}
        <div className="bg-slate-100 h-auto min-h-[5vh] flex justify-between items-center ">
          <div className="hidden tablet:flex justify-start items-center space-x-8 ml-[15vw]">
            <Link href="/" className=" font-serif hover:text-red-600">
              Home
            </Link>
            <Link href="/product" className=" font-serif hover:text-red-600">
              Product
            </Link>
            <Link href="/about" className=" font-serif hover:text-red-600">
              About Huggies
            </Link>
          </div>

          <div className="hidden tablet:flex items-center space-x-6">
            <Link
              href="https://www.daraz.com.np/baby-diapers/huggies/"
              className="hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                aria-label="Buy Now - Huggies Skin Perfect Diapers"
                className="bg-green-500 text-white font-bold px-3 py-3 font-serif my-2 mx-2 rounded-3xl"
              >
                <LocalMallIcon className="text-white px-1" />
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
