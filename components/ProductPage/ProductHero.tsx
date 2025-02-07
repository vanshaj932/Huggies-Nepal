"use client";

import React from "react";
import Image from "next/image";
import FilteredProducts from "./FilteredProducts";

const ProductHero = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 tablet:flex-row items-center justify-between  p-8 md:px-24 md:py-16">
        {/* Text Section */}
        <div className="w-auto text-left md:text-left tablet:w-[50%]">
          <h1 className="text-5xl font-serif font-bold text-gray-800 leading-tight mb-4">
            Huggies Diapers
          </h1>
          <p className="text-5xl font-serif font-bold text-gray-800 leading-tight mb-4">
            We got you, baby.
          </p>
          <p className="text-lg font-sans text-gray-700 font-semibold">
            Our diapers are designed to provide maximum comfort and absorbency
            for your little one across all stages. Huggies® diapers are made
            without harsh ingredients and provide up to 12 hours of leakage
            protection. Explore our uniquely perfect line of diapers for your
            bundle of joy below.
          </p>
        </div>

        {/* Image Section */}
        {/* Image Section */}
        <div className="w-full tablet:w-1/2 mt-8 md:mt-0">
          <Image
            src="/assets/images/product-bg.jpg"
            alt="Huggies Diapers"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <FilteredProducts />
    </>
  );
};

export default ProductHero;
