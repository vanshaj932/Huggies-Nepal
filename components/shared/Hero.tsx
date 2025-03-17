"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const images = [
  "/assets/newImages/SkinPerfect.jpg",
  "/assets/newImages/SkinPerfect2.jpg",
  "/assets/newImages/overnite.jpg",
];

// Define products with full names and colors
const products = [
  {
    name: "Huggies Nature Made Diapers",
    link: "/products/nature-made",
    color: "bg-blue-500",
  },
  {
    name: "Huggies Skin Perfect Diapers",
    link: "/products/skin-perfect",
    color: "bg-yellow-500",
  },
  {
    name: "Huggies Overnite Diapers",
    link: "/products/overnite",
    color: "bg-red-500",
  },
  {
    name: "Huggies Dry Comfort Diapers",
    link: "/products/dry-comfort",
    color: "bg-red-500",
  },
];

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Product Blocks */}
      <div className="grid grid-cols-2 gap-4 py-4 tablet:grid-cols-4">
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.link}
            className={`${product.color} hidden w-[300px] text-wrap rounded-full px-6 py-3 text-center font-semibold text-white transition duration-300 hover:opacity-80 tablet:flex`}
          >
            <Image
              src="/assets/images/logo-huggies.png"
              alt="Huggies Logo"
              width={50}
              height={50}
            />
            {product.name}
          </Link>
        ))}
      </div>

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
