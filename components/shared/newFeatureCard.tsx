import Image from "next/image";
import React from "react";

interface Feature {
  image: string;
  title: string;
  subImage: string;
  description: string[];
}

interface FeatureProps {
  features: Feature[];
}

const FeatureCard: React.FC<FeatureProps> = ({ features }) => {
  return (
    <section className="flex flex-col items-center bg-slate-100">
      {features.map((feature, index) => (
        <div
          key={index}
          className="mx-[5%] mt-10 flex h-auto flex-col-reverse items-center rounded-xl bg-white shadow-xl  tablet:h-full tablet:w-[70%] tablet:flex-row-reverse"
        >
          <div className="size-full tablet:mb-0 tablet:w-1/3">
            <div className="relative size-full">
              <Image
                src={feature.image}
                alt={feature.title}
                width={256}
                height={256}
                quality={100}
                className="size-full object-contain "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent tablet:bg-gradient-to-r"></div>
            </div>
          </div>

          <div className="flex h-auto flex-col items-center justify-start gap-y-8 tablet:w-2/3 tablet:items-start tablet:pl-6 tablet:pr-10">
            <div className="relative size-[30%] tablet:size-[10%]">
              <Image
                src={feature.subImage}
                alt={feature.title}
                width={100}
                height={100}
                quality={100}
                draggable={false}
                className="size-full object-contain"
              />
            </div>

            <div className="text-center tablet:text-left">
              <h2 className="mb-2 text-xl font-bold text-green-600">
                {feature.title}
              </h2>

              {feature.description.map((desc, index) => (
                <p
                  key={index}
                  className="mb-2 gap-y-6 text-xl font-medium italic text-gray-600"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureCard;
