"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { product } from "@/constants/product";
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
  const swiperRef = useRef(null);

  // Number of slides per view based on the device
  let num = 4;
  if (device === "mobile") num = 1;
  else if (device === "tablet") num = 2;

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Manually reinitialize navigation buttons
      swiperInstance.params.navigation.prevEl = ".swiper-button-prevv";
      swiperInstance.params.navigation.nextEl = ".swiper-button-nextt";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="bg-[url('/assets/images/bg-product.png')] greeny-10 h-[80vh] w-auto overflow-hidden flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif mt-6 text-white">
        Products
      </h2>
      <div className="w-[70%] mx-[20px] relative justify-center items-center tablet:w-[70%]">
        <Swiper
          ref={swiperRef} // Attach ref to Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv",
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
        <button className="swiper-button-prevv absolute h-[60px] flex items-center justify-center top-[45%] left-[-50px] z-20 w-[60px] rounded-full bg-pink-500 text-green-500">
          <Image
            src="/assets/svg/chevron-left.svg"
            alt="left"
            width={40}
            height={40}
          />
        </button>
        <button className="swiper-button-nextt absolute h-[60px] flex items-center justify-center top-[45%] right-[-50px] z-20 w-[60px] rounded-full bg-pink-500 text-green-500">
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
