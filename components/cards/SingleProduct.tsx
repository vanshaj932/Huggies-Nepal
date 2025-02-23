"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductFeature from "./ProductFeature";
import Link from "next/link";

interface Size {
  size: string; // e.g., "XS/NB", "S", "M", etc.
  weight: string; // e.g., "0-5 kgs", "4-8 kgs", etc.
  highlight?: boolean; // Optional: true for highlighting specific sizes
}

interface Feature {
  img: string;
  title: string;
  content: string;
}

type Product = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: Size[];
  type: string;
  features: Feature[];
};

interface ProductProps {
  product: Product;
}

const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedRetailer, setSelectedRetailer] = useState<string>("");

  // Define the Shop Now URL dynamically
  const getShopNowLink = () => {
    if (!selectedSize || !selectedRetailer) {
      return "#"; // Default link if no selection
    }

    // Example URL structure for different retailers (You can customize based on real URLs)
    return `https://www.${selectedRetailer}.com/search?q=huggies+${selectedSize}`;
  };

  return (
    <div className="overflow-hidden pt-10 ">
      <div className="flex grow flex-col laptop:flex-row laptop:px-8">
        {/* Product Image */}
        <div className="w-full laptop:w-[64%]">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="h-auto w-full object-cover shadow-lg laptop:rounded-3xl "
          />
        </div>

        {/* Product Details */}
        <div className="m-4 w-full laptop:m-8 laptop:w-[36%]">
          <p className="text-[16px]">Diapers</p>
          <h1 className="font-serif text-[40px] font-medium text-gray-800">
            {product.name}
          </h1>
          <p className="mb-8 mt-4 text-wrap text-lg text-black">
            {product.description}
          </p>

          {/* Available Sizes */}
          {product.size.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(item.size)}
              className={`m-2 w-auto rounded-md border border-black px-2 text-xl font-bold ${
                item.size === selectedSize
                  ? "border-red-500 bg-red-100 text-red-500" // Highlight the selected size
                  : "bg-white text-black"
              }`}
            >
              Size-{item.size} <br />
              <span
                className={`text-[15px] text-black ${
                  item.size === selectedSize
                    ? "border-red-500 bg-red-100 text-red-500" // Highlight the selected size
                    : "bg-white text-black"
                }`}
              >
                ({item.weight})
              </span>
            </button>
          ))}

          {/* Features */}
          {/* <ul className="mt-4 space-y-2 ">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                ✅ {feature}
              </li>
            ))}
          </ul> */}

          <div className="my-4">
            <h3 className="mb-2 text-sm font-bold text-gray-700">
              Select Retailer
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  name: "daraz",
                  logo: "/assets/images/daraz_logo.jpeg",
                },
              ].map((retailer, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedRetailer(retailer.name)}
                  className={`flex items-center justify-center rounded-lg border object-contain p-2 ${
                    retailer.name === selectedRetailer
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={retailer.logo}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Shop Now */}
          <div className="mt-10">
            <Link
              href={getShopNowLink()}
              className={`rounded-lg bg-red-600 p-6 text-sm text-white shadow hover:bg-red-700 ${
                !selectedSize || !selectedRetailer
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <ProductFeature features={product.features} />
    </div>
  );
};

export default SingleProduct;
