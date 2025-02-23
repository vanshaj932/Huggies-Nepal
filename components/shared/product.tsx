/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { product } from "@/lib/product";
import ProductCard from "./productCard";
import Image from "next/image";

type DeviceType = "mobile" | "tablet" | "desktop";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  device: DeviceType;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    device: "desktop", // Default to 'desktop'
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determine the device type based on width
      let device: DeviceType;
      if (width < 768) {
        device = "mobile";
      } else if (width >= 768 && width <= 1024) {
        device = "tablet";
      } else {
        device = "desktop";
      }

      setWindowSize({ width, height, device });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const ProductCarousel = () => {
  const { width, height, device } = useWindowSize();

  // Swiper Reference

  // Number of slides per view based on the device
  let num = 4;
  if (device === "mobile") num = 1;
  else if (device === "tablet") num = 2;
  // Change the ref type to just SwiperType
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className=" flex h-[80vh] w-auto flex-col items-center justify-center overflow-hidden bg-[url('/assets/images/bg-product.png')]">
      <h2 className="mb-10 mt-6 text-center font-serif text-3xl font-bold text-white">
        Products
      </h2>
      <div className="relative mx-[20px] w-[70%] items-center justify-center tablet:w-[70%]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }} // Attach ref to Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv",
            enabled: true,
          }}
          spaceBetween={20}
          slidesPerView={num}
          loop
          className="group"
        >
          {product.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard
                imageUrl={p.image}
                productName={p.name}
                size={p.size}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prevv absolute left-[-50px] top-[45%] z-20 flex size-[60px] items-center justify-center rounded-full bg-pink-500 text-green-500">
          <Image
            src="/assets/svg/chevron-left.svg"
            alt="left"
            width={40}
            height={40}
          />
        </button>
        <button className="swiper-button-nextt absolute right-[-50px] top-[45%] z-20 flex size-[60px] items-center justify-center rounded-full bg-pink-500 text-green-500">
          <Image
            src="/assets/svg/chevron-right.svg"
            alt="right"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
