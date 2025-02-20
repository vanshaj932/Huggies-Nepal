// "use client";

// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose,
//   SheetTitle, // Import SheetTitle
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import Image from "next/image";
// import { IoMenu } from "react-icons/io5";

// const MobileNav = () => {
//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "Products", href: "/product" },
//     { label: "About", href: "/about" },
//   ];

//   return (
//     <div className="flex w-[50%] items-center justify-end">
//       {/* Hamburger Menu Icon */}
//       <Sheet>
//         <SheetTrigger asChild>
//           <IoMenu className="tablet:hidden" />
//         </SheetTrigger>

//         {/* Drawer Content */}
//         <SheetContent side="top" className=" p-4 h-full">
//           {/* Sheet Title */}
//           <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

//           {/* Logo */}
//   <div className="mb-8 text-left">
//     <Link href="/" className="flex items-center text-left gap-2">
//       <Image
//         src="/assets/images/main-logo.webp"
//         alt="Site Logo"
//         width={60}
//         height={60}
//       />
//       <span className="text-2xl font-bold -translate-x-4 ml-[25%]">
//         Huggies
//       </span>
//     </Link>
//   </div>

//   {/* Navigation Links */}
//   <nav className="flex flex-col space-y-4">
//     {navLinks.map((link) => (
//       <SheetClose asChild key={link.href}>
//         <Link
//           href={link.href}
//           className="text-xl text-gray-700 rounded-3xl hover:text-white hover:bg-blue-400  transition-all my-[16px] py-[24px] px-[32px] flex justify-center items-center font-serif font-normal "
//         >
//           {link.label}
//         </Link>
//       </SheetClose>
//     ))}
//   </nav>
// </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default MobileNav;

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

const MobileNav = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About Huggies", href: "/about" },
  ];

  return (
    <div className="tablet:hidden h-auto">
      {/* Buy Now Button */}
      <div className="bg-blue-100 min-h-[5vh] w-full"></div>
      <div className="min-h-[5vh] w-full h-auto flex flex-row items-center justify-center bg-slate-100">
        <div className="flex items-center justify-center pr-[50%] ">
          <Link href="/">
            <img
              src="/assets/images/main-logo.webp"
              alt="Huggies Logo"
              className="w-[100px] h-20"
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
              className="bg-green-500 text-white font-bold items-center font-serif rounded-full flex "
            >
              <LocalMallIcon className="text-white px-1 h-10 w-10" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="w-6 h-6 text-blue-500" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="w-full h-full text-center p-0 bg-white"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="mb-8 text-center">
              <Link href="/" className="flex items-center text-center gap-2">
                <span className="text-2xl font-bold text-center font-serif  ">
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
    </div>
  );
};

export default MobileNav;
