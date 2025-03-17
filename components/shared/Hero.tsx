"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "../newProduct/Banner";

const images = [
  "/assets/newImages/overnite.jpg",
  "/assets/newImages/SkinPerfect.jpg",
  "/assets/newImages/SkinPerfect2.jpg",
];

// Define products with full names and colors

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Product Blocks */}
      <Banner />
      {/* Image Slider Section */}
      <div className="h-[60vh] w-full tablet:h-[40vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="size-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative size-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
