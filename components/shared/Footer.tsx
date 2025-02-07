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
const LinkedInIcon = dynamic(() => import("@mui/icons-material/LinkedIn"), {
  ssr: false,
});

const Footer = () => {
  return (
    <div className="mt-6 bg-bluereal h-auto flex w-full px-8">
      <div className="w-full px-[15px] mx-auto box-border pt-[45px] pb-[80px]">
        <div className="border-b-[1px] border-white flex mx-[-15px] pt-[45px] pb-[120px] flex-wrap justify-center items-center tablet:flex-nowrap">
          <div className="mx-11 px-4 h-[270px] w-[352.5px] flex justify-center items-center">
            <Image
              src="/assets/images/main-logo.webp"
              alt="huggies logo"
              width={210}
              height={210}
            />
          </div>
          <div className="flex text-center items-center justify-center flex-col h-[270px] w-[235px]">
            <h4 className="h4-bold mb-[30px]">About us</h4>
            <ul className="text-white font-light gap-8">
              <li className="text-lg mb-[16px]">Products</li>
              <li className="text-lg">About Huggies</li>
            </ul>
          </div>
          <div className="mx-[15px] text-center flex h-[170px] w-[235px] flex-col tablet:mt-[32px]">
            <h4 className="h4-bold mb-[30px]">Support</h4>
            <ul className="gap-[16px]">
              <li className="text-white text-lg font-light gap-8">
                Contact us
              </li>
            </ul>
          </div>

          <div className="flex  w-[469px] h-[270px] ml-6 text-center justify-center">
            <div className="h-[90px] tablet:mt-[64px]">
              <h4 className="h4-bold mb-[30px]">Know Huggies</h4>
              <ul className="flex gap-6 justify-center items-center   ">
                <li className="border p-2 rounded-full hover:bg-blue-500 hover:border-none transition-all">
                  <Link href="https://www.facebook.com/profile.php?id=61555290609679">
                    <FacebookRoundedIcon className="h-12 w-12 text-white" />
                  </Link>
                </li>
                <li className="border p-2 rounded-full hover:bg-blue-500 hover:border-none transition-all">
                  <Link href="#">
                    <InstagramIcon className="h-12 w-12 text-white" />
                  </Link>
                </li>
                <li className="border p-2 rounded-full hover:bg-blue-500 hover:border-none transition-all">
                  <YouTubeIcon className="h-12 w-12 text-white" />
                </li>
                <li className="border p-2 rounded-full hover:bg-blue-500 hover:border-none transition-all">
                  <WhatsApp className="h-12 w-12 text-white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
