import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FilteredProducts = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Huggies Natural Soft Premium Pants",
      description:
        "Our softest diapers made with India's 1st Cloud Touch Belt and goodness of natural cotton",
      image: "/assets/images/product1.jpg",
      size: ["S"],
      type: ["Taped"],
      features: ["Natural Cotton", "12-hour Absorbency"],
    },
    {
      id: 2,
      name: "Huggies Wonder Pants",
      description:
        "India's fastest absorbing diaper pants with Dry Xpert technology that absorbs 4x faster for up to 12 hours",
      image: "/assets/images/product2.jpg",
      size: ["M", "L"],
      type: ["Pants"],
      features: ["12-hour Absorbency", "Breathable Air Circulation"],
    },
    {
      id: 3,
      name: "Huggies Comfy Pants",
      description:
        "Diapers with 1000 absorption funnels which absorbs for up to 12 hours for an uninterrupted sleep.",
      image: "/assets/images/product3.jpg",
      size: ["S", "M"],
      type: ["Pants"],
      features: ["12-hour Absorbency", "Bubble Bed Liner"],
    },
  ];

  const [openSections, setOpenSections] = useState({
    diaperSize: true,
    productType: true,
    diaperFeature: true,
  });

  const sections = {
    diaperSize: true,
    productType: true,
    diaperFeature: true,
  };

  const toggleSection = (section: any) => {
    setOpenSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // State for filters
  const [filters, setFilters] = useState<{
    size: string[];
    type: string[];
    features: string[];
  }>({
    size: [],
    type: [],
    features: [],
  });

  // Function to handle filter changes
  const handleFilterChange = (filterCategory: string, value: string) => {
    setFilters((prevFilters) => {
      const updatedCategory =
        prevFilters[filterCategory as keyof typeof filters];
      const isChecked = updatedCategory.includes(value);

      return {
        ...prevFilters,
        [filterCategory]: isChecked
          ? updatedCategory.filter((item) => item !== value) // Remove if unchecked
          : [...updatedCategory, value], // Add if checked
      };
    });
  };

  // Filter the products based on the active filters
  const filteredProducts = products.filter((product) => {
    // Check each filter category
    const matchesSize =
      filters.size.length === 0 ||
      filters.size.some((size) => product.size.includes(size));
    const matchesType =
      filters.type.length === 0 ||
      filters.type.some((type) => product.type.includes(type));
    const matchesFeatures =
      filters.features.length === 0 ||
      filters.features.some((feature) => product.features.includes(feature));

    return matchesSize && matchesType && matchesFeatures;
  });

  return (
    <div className="flex flex-col tablet:flex-row gap-6 p-6">
      {/* Sidebar Filters */}
      <div className="w-full tablet:w-[30%] p-4  rounded-md">
        <h2 className="text-2xl border-b-[1px] font-serif font-bold pb-4 mb-4">
          Filter Products By
        </h2>

        {/* Filter Categories */}
        <div className="mb-6 border-b-[1px]">
          <div
            className="flex justify-between items-center cursor-pointer  mb-6"
            onClick={() => toggleSection("diaperSize")}
          >
            <h3 className="text-md font-semibold mb-2">Diaper Size</h3>
            <span className="text-red-500 ">
              {openSections.diaperSize ? "▲" : "▼"}
            </span>
          </div>
          {openSections.diaperSize && (
            <ul>
              {["S", "M", "L", "XL"].map((size) => (
                <li key={size} className="mb-2">
                  <label className="flex items-center ">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300 text-red-500 focus:ring-red-500"
                      onChange={() => handleFilterChange("size", size)}
                    />
                    Size {size}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-6 border-b-[1px]">
          <div
            className="flex justify-between items-center cursor-pointer mb-6"
            onClick={() => toggleSection("productType")}
          >
            <h3 className="text-md font-semibold mb-2">Product Type</h3>
            <span className="text-red-500">
              {openSections.productType ? "▲" : "▼"}
            </span>
          </div>
          {openSections.productType && (
            <ul>
              {["Pants", "Taped"].map((type) => (
                <li key={type} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300 text-red-500 focus:ring-red-500"
                      onChange={() => handleFilterChange("type", type)}
                    />
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-b-[1px]">
          <div
            className="flex justify-between items-center cursor-pointer mb-6"
            onClick={() => toggleSection("diaperFeature")}
          >
            <h3 className="text-md font-semibold mb-2">Diaper Feature</h3>
            <span className="text-red-500">
              {openSections.diaperFeature ? "▲" : "▼"}
            </span>
          </div>
          {openSections.diaperFeature && (
            <ul>
              {[
                "12-hour Absorbency",
                "Breathable Air Circulation",
                "Bubble Bed Liner",
                "Natural Cotton",
              ].map((feature) => (
                <li key={feature} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300 text-red-500 focus:ring-red-500"
                      onChange={() => handleFilterChange("features", feature)}
                    />
                    {feature}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {filteredProducts.length} Products
          </h2>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center">
                {/* Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto mb-4 rounded-xl"
                />

                {/* Product Name */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 text-center">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {product.description}
                </p>

                {/* Shop Now Button */}
                <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-full hover:bg-red-600 transition duration-300">
                  Shop Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
