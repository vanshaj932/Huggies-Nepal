"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Feature {
  img: string;
  title: string;
  content: string;
  icon?: string;
}

interface FeatureProps {
  features: Feature[];
}

const ProductFeature: React.FC<FeatureProps> = ({ features }) => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    features.forEach((_, index) => {
      gsap.fromTo(
        `#feature-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#feature-${index}`,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [features]);

  return (
    <section className="bg-[#fff4f4] py-16">
      <div className="max-w-screen flex flex-col text-center mx-10 px-4 laptop:flex-row laptop:text-left">
        {/* Header */}
        <div className="w-auto mr-10">
          <h1 className="text-4xl tablet:text-5xl text-nowrap text-gray-700 font-serif mb-16">
            Product Features
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-16 gap-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-${index}`}
              className={`relative opacity-0 ${index % 2 === 1 ? "laptop:mt-[400px]" : "laptop:-mt-[200px]"} ${index === 0 ? "laptop:mt-0" : ""}`}
            >
              {/* Feature Card */}
              <div className="bg-[#ffecec] rounded-2xl overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />

                  {/* Icon Overlay - if icon exists */}
                  {feature.icon && (
                    <div className="absolute left-8 top-8 w-24 h-24">
                      <Image
                        src={feature.icon}
                        alt="feature icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 right-4 w-6 h-6 rounded-full bg-[#ffdddd]" />
              <div className="absolute -z-10 bottom-4 left-4 w-4 h-4 rounded-full bg-[#ffdddd]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
