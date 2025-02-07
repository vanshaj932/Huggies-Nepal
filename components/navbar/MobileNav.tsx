"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle, // Import SheetTitle
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const MobileNav = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="flex w-[50%] items-center justify-end">
      {/* Hamburger Menu Icon */}
      <Sheet>
        <SheetTrigger asChild>
          <IoMenu className="h-[30px] w-[30px] tablet:hidden" />
        </SheetTrigger>

        {/* Drawer Content */}
        <SheetContent side="top" className=" p-4 h-full">
          {/* Sheet Title */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* Logo */}
          <div className="mb-8 text-left">
            <Link href="/" className="flex items-center text-left gap-2">
              <Image
                src="/assets/images/main-logo.webp"
                alt="Site Logo"
                width={60}
                height={60}
              />
              <span className="text-2xl font-bold -translate-x-4 ml-[25%]">
                Huggies
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="text-xl text-gray-700 rounded-3xl hover:text-white hover:bg-blue-400  transition-all my-[16px] py-[24px] px-[32px] flex justify-center items-center font-serif font-normal "
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
