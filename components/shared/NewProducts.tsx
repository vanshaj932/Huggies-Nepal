import Image from "next/image";
import React from "react";

const features = [
  "Dual Zone dual absorbent technology",
  "Reduces loose stools on baby's skin by up to 93%",
  "Limits skin irritation",
];

interface FeatureItemProps {
  feature: string;
  index: number;
}

const FeatureItem = ({ feature, index }: FeatureItemProps) => (
  <li className="flex items-center bg-white shadow-md border border-gray-300 rounded-lg p-4 transition hover:shadow-lg hover:scale-[1.1]">
    <span className="flex items-center justify-center min-w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-4">
      {index + 1}
    </span>
    <p className="text-green-700 font-medium">{feature}</p>
  </li>
);

const NewProducts = () => {
  return (
    <div className=" flex flex-col text-center p-10">
      <h2 className="text-4xl font-semibold font-serif pb-10 text-gray-700">
        Our New Launches
      </h2>

      <div className="flex flex-col bg-white  text-left rounded-3xl shadow-lg laptop:flex-row transition hover:shadow-xl">
        {/* Left Section: Product Image */}
        <div className="relative w-full laptop:w-[50%] h-auto laptop:h-auto rounded-t-3xl laptop:rounded-l-3xl laptop:rounded-tr-none overflow-hidden">
          <Image
            src="/assets/images/newProduct12.jpg"
            alt="Huggies Skin Care Diaper"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Right Section: Product Info */}
        <div className="bg-gray-50 w-full h-auto px-8 py-6 laptop:w-[50%] rounded-b-3xl laptop:rounded-r-3xl laptop:rounded-bl-none">
          <h4 className="text-orange-400 font-serif text-3xl laptop:text-4xl tracking-wide">
            Huggies Skin Perfect Diapers
          </h4>
          <p className="py-6 text-lg text-gray-600 font-light">
            Soft surface combined with Dual Zone technology helps soothe and
            nourish your baby's skin. Clinically proven to help prevent skin
            irritation, safe for sensitive skin.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </ul>
          <button
            aria-label="Buy Now - Huggies Skin Perfect Diapers"
            className="bg-orange-400 text-white font-bold rounded-lg px-6 py-3 mt-10 hover:bg-orange-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
