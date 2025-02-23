import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";

const MobileNav = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About Huggies", href: "/about" },
  ];

  return (
    <div className="h-auto tablet:hidden">
      {/* Buy Now Button */}
      <div className="min-h-[5vh] w-full bg-blue-100"></div>
      <div className="flex h-auto min-h-[5vh] w-full flex-row items-center justify-center bg-slate-100">
        <div className="flex items-center justify-center pr-[50%] ">
          <Link href="/">
            <Image
              src="/assets/images/main-logo.webp"
              alt="Huggies Logo"
              height={20}
              width={100}
              className="h-20 w-[100px]"
            />
          </Link>
        </div>

        <div className="flex gap-1">
          <Link
            href="mailto:email@test.com"
            className="block text-sm text-gray-600 hover:text-blue-500"
          >
            <EmailIcon className="text-blue-500" />
          </Link>
          <Link
            href="tel:02-026-6597"
            className="block text-sm text-gray-600 hover:text-blue-500"
          >
            <CallIcon className="text-blue-500" />
          </Link>
          <Link
            href="https://www.daraz.com.np/baby-diapers/huggies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              aria-label="Buy Now - Huggies Skin Perfect Diapers"
              className="flex items-center rounded-full bg-green-500 font-serif font-bold text-white "
            >
              <LocalMallIcon className="size-10 px-1 text-white" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="size-6 text-blue-500" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="size-full bg-white p-0 text-center"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="mb-8 text-center">
              <Link href="/" className="flex items-center gap-2 text-center">
                <span className="text-center font-serif text-2xl font-bold  ">
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
                    className="my-[16px] flex items-center justify-center rounded-3xl  px-[32px] py-[24px] font-serif text-xl font-normal text-gray-700 transition-all hover:bg-blue-400 hover:text-white "
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
