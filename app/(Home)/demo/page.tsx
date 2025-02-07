"use client";
import React, { useState } from "react";

const HuggiesCard: React.FC = () => {
  // State to hold the selected size and retailer
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
    <div className="flex flex-col items-center bg-pink-100 p-6 rounded-lg shadow-md">
      {/* Top Section */}
      <div className="bg-yellow-500 text-center text-white font-bold text-sm px-4 py-1 rounded">
        New and Improved
      </div>
      <h2 className="mt-2 text-red-600 font-bold text-lg">
        Our Best Ever <span className="block">HUGGIES</span>
      </h2>
      <p className="text-gray-700">complete comfort</p>
      <div className="mt-3 relative">
        {/* Product Image */}
        <img
          src="/huggies-diaper.png"
          alt="Huggies Wonder Pants"
          className="h-48 rounded-lg"
        />
        <span className="absolute bottom-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          Fastest Absorbing
        </span>
      </div>

      {/* Size Buttons */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          { size: "XS/NB", weight: "0-5 kgs" },
          { size: "S", weight: "4-8 kgs" },
          { size: "M", weight: "7-12 kgs" },
          { size: "L", weight: "9-14 kgs" },
          { size: "XL", weight: "12-17 kgs" },
          { size: "XXL", weight: "15-25 kgs" },
          { size: "XXXL", weight: "17 kgs+", highlight: true },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(item.size)}
            className={`border rounded px-2 py-1 text-xs ${
              item.size === selectedSize
                ? "bg-red-500 text-white" // Highlight the selected size
                : "bg-white text-gray-600"
            }`}
          >
            {item.size} <br />
            <span className="text-gray-500 text-[10px]">{item.weight}</span>
          </button>
        ))}
      </div>

      {/* Retailers Section */}
      <div className="mt-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">
          Select Retailer
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "amazon", logo: "/amazon-logo.png" },
            { name: "firstcry", logo: "/firstcry-logo.png" },
            { name: "flipkart", logo: "/flipkart-logo.png" },
            { name: "blinkit", logo: "/blinkit-logo.png" },
            { name: "zepto", logo: "/zepto-logo.png" },
          ].map((retailer, index) => (
            <button
              key={index}
              onClick={() => setSelectedRetailer(retailer.name)}
              className={`border rounded-lg p-2 flex items-center justify-center ${
                retailer.name === selectedRetailer
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <img
                src={retailer.logo}
                alt={retailer.name}
                className="h-8 w-auto"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Shop Now */}
      <div className="mt-4">
        <a
          href={getShopNowLink()}
          className={`bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 text-sm ${
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
  );
};

export default HuggiesCard;
