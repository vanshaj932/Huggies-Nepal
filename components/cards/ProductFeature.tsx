"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";

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
  // const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    features.forEach((_, index) => {
      gsap.fromTo(
        `#feature-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#feature-${index}`,
            start: "top 80%", // Triggers when the top of the element reaches 80% of the viewport
            end: "top 30%", // Ends when the top reaches 30% of the viewport
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [features]);

  return (
    <section className="mt-10 bg-[#fff4f4] py-16">
      <div className="mx-10 flex max-w-full flex-col px-4 text-center laptop:flex-row laptop:text-left">
        {/* Header */}
        <div className="mr-10 w-auto">
          <h1 className="mb-16 text-nowrap font-serif text-4xl text-gray-700 tablet:text-5xl">
            Product Features
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-20 laptop:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-${index}`}
              className={`relative opacity-0 ${index % 2 === 1 ? "laptop:mt-[400px]" : "laptop:mt-[-200px]"} ${index === 0 ? "laptop:mt-[50px]" : ""}`}
            >
              {/* Feature Card */}
              <div className="overflow-hidden rounded-2xl bg-[#ffecec]">
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
                    <div className="absolute left-8 top-8 size-24">
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
                  <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                    {feature.title}
                  </h2>
                  <p className="leading-relaxed text-gray-600">
                    {feature.content}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-4 top-4 -z-10 size-6 rounded-full bg-[#ffdddd]" />
              <div className="absolute bottom-4 left-4 -z-10 size-4 rounded-full bg-[#ffdddd]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
