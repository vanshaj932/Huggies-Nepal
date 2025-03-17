import Image from "next/image";
import React from "react";
import FeatureCard from "@/components/shared/newFeatureCard";
import Link from "next/link";

interface ProductDetail {
  heading: string;
  description: string;
  points?: string[];
}

interface Feature {
  image: string;
  subImage: string;
  title: string;
  description: string[];
}

type newProduct = {
  id: number;
  coverImage: string;
  productName: string;
  tagline: string;
  introduction: string;
  description: string;
  productImage: string;
  size: string[];
  heading?: string;
  details: ProductDetail[];
  features: Feature[];
};

interface ProductProps {
  newProduct: newProduct;
}

const NewProduct: React.FC<ProductProps> = ({ newProduct }) => {
  return (
    <section>
      <div className="h-auto">
        <Image
          src={newProduct.coverImage}
          alt={newProduct.productName}
          width={800}
          height={800}
          className="size-full object-cover shadow-lg"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mt-12">
          <h1 className="text-center font-mono text-4xl font-extrabold uppercase text-red-500">
            {newProduct.productName}
          </h1>
        </div>

        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="mb-12 border-b border-[#e1e1e1]  text-xl font-bold uppercase text-red-500">
            Introduction
          </h1>
        </div>

        <div className="mt-4">
          <p className="text-left font-sans text-xl font-medium text-gray-700">
            {newProduct.tagline}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center">
          <div className="size-[400px]">
            <Image
              src={newProduct.productImage}
              alt={newProduct.productName}
              width={800}
              height={800}
              className="size-full object-cover shadow-lg"
            />
          </div>
          {newProduct.size && (
            <div className="mt-6">
              <ul className="mt-4 flex list-inside list-disc flex-row">
                {newProduct.size.map((size, index) => (
                  <p
                    key={index}
                    className="font-serif text-lg font-bold uppercase text-green-600"
                  >
                    {size}
                    {index !== newProduct.size.length - 1 && " / "}
                  </p>
                ))}
              </ul>
            </div>
          )}
          <Link href="#">
            <button className="mt-4 min-w-[400px] rounded-full border-2 border-red-500 px-4 py-2  font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white">
              Buy Now
            </button>
          </Link>
        </div>

        <div className="mt-6">
          <p className="text-left font-serif text-xl font-light uppercase text-gray-600">
            {newProduct.description}
          </p>
        </div>

        <div className="my-10">
          <h2 className="border-b border-b-[#e1e1e1] text-center font-serif text-2xl font-bold text-red-500">
            {newProduct.heading}
          </h2>
        </div>

        <div className="mt-6">
          {newProduct.details.map((detail, index) => (
            <div key={index} className="mt-10">
              <h3 className="font-mono text-2xl font-bold text-gray-700">
                {detail.heading}
              </h3>

              <p className="font-serif text-lg font-medium text-gray-600">
                {detail.description}
              </p>

              {detail.points && (
                <ul className="mt-4 list-inside list-disc">
                  {detail.points.map((point, index) => (
                    <li
                      key={index}
                      className="font-serif text-lg font-light text-gray-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <FeatureCard features={newProduct.features} />
    </section>
  );
};

export default NewProduct;
