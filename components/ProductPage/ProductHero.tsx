"use client";

import React from "react";
import Image from "next/image";
import FilteredProducts from "./FilteredProducts";

const ProductHero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-gray-50 p-8  tablet:flex-row tablet:px-24 tablet:py-16">
        {/* Text Section */}
        <div className="w-auto text-left tablet:w-1/2 tablet:text-left">
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-gray-800">
            Huggies Diapers
          </h1>
          <p className="mb-4 font-serif text-5xl font-bold leading-tight text-gray-800">
            We got you, baby.
          </p>
          <p className="font-sans text-lg font-semibold text-gray-700">
            Our diapers are designed to provide maximum comfort and absorbency
            for your little one across all stages. Huggies® diapers are made
            without harsh ingredients and provide up to 12 hours of leakage
            protection. Explore our uniquely perfect line of diapers for your
            bundle of joy below.
          </p>
        </div>

        {/* Image Section */}
        {/* Image Section */}
        <div className="mt-8 w-full tablet:mt-0 tablet:w-1/2">
          <Image
            src="/assets/images/product-bg.jpg"
            alt="Huggies Diapers"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <FilteredProducts />
    </>
  );
};

export default ProductHero;
