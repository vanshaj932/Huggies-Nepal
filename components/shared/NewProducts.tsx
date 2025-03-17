import Image from "next/image";
import React from "react";
import { newProducts } from "@/lib/product";

interface FeatureItemProps {
  feature: string;
  index: number;
}

const FeatureItem = ({ feature, index }: FeatureItemProps) => (
  <li className="flex items-center rounded-lg border border-gray-300 bg-white p-4 shadow-md transition hover:scale-110 hover:shadow-lg">
    <span className="mr-4 flex h-8 min-w-8 items-center justify-center rounded-full bg-green-500 font-bold text-white">
      {index + 1}
    </span>
    <p className="font-medium text-green-700">{feature}</p>
  </li>
);

const NewProducts = () => {
  return (
    <div className=" flex flex-col p-10 text-center">
      <h2 className="pb-10 font-serif text-4xl font-semibold text-gray-700">
        Our New Launches
      </h2>

      {newProducts.map((product, index) => (
        <div
          key={index}
          className="mb-5 flex flex-col rounded-3xl bg-white text-left shadow-lg transition hover:shadow-xl laptop:flex-row"
        >
          {/* Left Section: Product Image */}
          <div className="relative h-auto w-full overflow-hidden rounded-t-3xl laptop:h-[700px] laptop:w-1/2 laptop:rounded-l-3xl laptop:rounded-tr-none">
            <Image
              src={product.imageUrl}
              alt={`Image of ${product.name}`}
              layout="responsive"
              width={500}
              height={500}
              className="h-full object-fill"
            />
          </div>

          {/* Right Section: Product Info */}
          <div className="h-auto w-full rounded-b-3xl bg-gray-50 px-8 py-6 laptop:w-1/2 laptop:rounded-r-3xl laptop:rounded-bl-none">
            <h4 className="font-serif text-3xl tracking-wide text-orange-400 laptop:text-4xl">
              {product.name}
            </h4>
            <p className="py-6 text-lg font-light text-gray-600">
              {product.description}
            </p>

            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </ul>
            <div className="mt-10 flex justify-center">
              <button
                aria-label="Buy Now - Huggies Skin Perfect Diapers"
                className="rounded-lg bg-orange-400 px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-500 hover:shadow-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
