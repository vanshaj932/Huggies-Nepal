"use client";

import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const FacebookRoundedIcon = dynamic(
  () => import("@mui/icons-material/FacebookRounded"),
  { ssr: false }
);
const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"), {
  ssr: false,
});
const YouTubeIcon = dynamic(() => import("@mui/icons-material/YouTube"), {
  ssr: false,
});

const Footer = () => {
  const socialLinks = [
    {
      icon: <FacebookRoundedIcon className="size-8 text-white" />,
      href: "https://www.facebook.com/profile.php?id=61555290609679",
      label: "Facebook",
    },
    {
      icon: <InstagramIcon className="size-8 text-white" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <YouTubeIcon className="size-8 text-white" />,
      href: "",
      label: "YouTube",
    },
    {
      icon: <WhatsApp className="size-8 text-white" />,
      href: "https://wa.me/+977-9804212280",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="mt-10 bg-bluereal py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 border-b border-white/30 pb-20 tablet:grid-cols-2 laptop:grid-cols-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/main-logo.webp"
              alt="huggies logo"
              width={240}
              height={240}
              className="transition-opacity hover:opacity-90"
            />
          </div>

          {/* About Us Section */}
          <div className="text-center laptop:text-left">
            <h4 className="mb-8 font-serif text-3xl font-bold text-white">
              About us
            </h4>
            <ul className="space-y-6">
              <li>
                <Link
                  href="/product"
                  className="text-xl text-white/90 transition-colors hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl text-white/90 transition-colors hover:text-white"
                >
                  About Huggies
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center laptop:text-left">
            <h4 className="mb-8 font-serif text-3xl font-bold text-white">
              Support
            </h4>
            <ul className="space-y-6">
              <li>
                <Link
                  href="/contact"
                  className="text-xl text-white/90 transition-colors hover:text-white"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="text-center laptop:text-left">
            <h4 className="mb-8 font-serif text-3xl font-bold text-white">
              Know Huggies
            </h4>
            <div className="flex justify-center space-x-6 laptop:justify-start">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="rounded-full border-2 border-white/30 p-4 transition-all duration-300 hover:bg-white/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center">
          <p className="text-lg text-white/70">
            © {new Date().getFullYear()} Huggies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
