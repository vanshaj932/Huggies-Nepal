"use client";
import Image from "next/image";
import React from "react";

interface Feature {
  img: string;
  title: string;
  content: string;
}

interface FeatureProps {
  features: Feature[];
}

const ProductFeature: React.FC<FeatureProps> = ({ features }) => {
  return (
    <div className="h-auto flex flex-col bg-red-50 mt-20 tablet:pt-20  tablet:text-left tablet:flex-row pb-10">
      <div className="tablet:mx-[100px] flex flex-col tablet:flex-row w-full">
        <div className="w-auto ">
          <h1 className="text-[50px] text-center tablet:text-left tablet:text-[60px] text-nowrap text-gray-700 font-serif">
            Product Features
          </h1>
        </div>

        <div className="w-full flex flex-wrap tablet:flex-row tablet:gap-20">
          {features.map((feature, index) => (
            <div
              className={`flex flex-col w-full m-2 mt-10 rounded-xl bg-red-100 tablet:w-[45%] tablet:h-auto ${index % 2 === 0 ? "tablet:mt-[400px]" : ""}`}
              key={index}
            >
              <Image
                src={feature.img}
                alt={feature.title}
                layout="responsive"
                width={75}
                height={100}
                className="rounded-xl w-full h-auto mb-5"
              />

              <div className="text-left text-wrap w-full">
                <h1 className="pl-5 font-semibold text-xl">{feature.title}</h1>
                <p className="text-left pl-5 mt-5">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
