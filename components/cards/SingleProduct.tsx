"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductFeature from "./ProductFeature";

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
      <div className="flex flex-col flex-grow laptop:flex-row laptop:px-8">
        {/* Product Image */}
        <div className="w-full laptop:w-[64%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full shadow-lg object-cover h-auto laptop:rounded-3xl "
          />
        </div>

        {/* Product Details */}
        <div className="w-full m-4 laptop:m-8 laptop:w-[36%]">
          <p className="text-[16px]">Diapers</p>
          <h1 className="text-[40px] font-medium font-serif text-gray-800">
            {product.name}
          </h1>
          <p className="text-lg text-black mt-4 text-wrap mb-8">
            {product.description}
          </p>

          {/* Available Sizes */}
          {product.size.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(item.size)}
              className={`border border-black rounded-md my-2 px-2 text-xl font-bold mx-2 w-auto ${
                item.size === selectedSize
                  ? "bg-red-100 text-red-500 border-red-500" // Highlight the selected size
                  : "bg-white text-black"
              }`}
            >
              Size-{item.size} <br />
              <span
                className={`text-black text-[15px] ${
                  item.size === selectedSize
                    ? "bg-red-100 text-red-500 border-red-500" // Highlight the selected size
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

          <div className="mt-4 mb-4">
            <h3 className="text-gray-700 text-sm font-bold mb-2">
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
                  className={`border object-contain rounded-lg p-2 flex items-center justify-center ${
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
            <a
              href={getShopNowLink()}
              className={`bg-red-600 text-white px-6 py-6 rounded-lg shadow hover:bg-red-700 text-sm ${
                !selectedSize || !selectedRetailer
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <ProductFeature features={product.features} />
    </div>
  );
};

export default SingleProduct;
