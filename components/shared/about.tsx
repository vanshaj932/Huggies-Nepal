"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutHuggies: React.FC = () => {
  return (
    <section className="bg-[#fff4f4] py-16 text-gray-700">
      <div className="mx-auto max-w-6xl px-6 text-center tablet:text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl font-bold text-gray-800 tablet:text-5xl">
            About Huggies
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Caring for babies and parents with love and comfort since day one.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16 flex flex-col items-center gap-10 tablet:flex-row">
          <div className="w-full tablet:w-1/2">
            <Image
              src="/assets/images/cover.webp"
              alt="Huggies Story"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full tablet:w-1/2">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Huggies has been dedicated to ensuring comfort and protection for
              babies around the world. Our innovative diapers and wipes have
              been trusted by parents for generations, helping babies stay dry
              and happy all day long.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 rounded-lg bg-[#ffecec] p-10 shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            To provide high-quality baby care products that ensure comfort,
            safety, and happiness for babies and peace of mind for parents.
          </p>
        </div>

        {/* Product Highlights */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">
            Why Choose Huggies?
          </h2>
          <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">Soft & Gentle</h3>
              <p className="mt-2 text-gray-600">
                Our diapers and wipes are made with gentle materials that
                protect delicate baby skin.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">Leak-Proof Protection</h3>
              <p className="mt-2 text-gray-600">
                Designed to keep your baby dry and comfortable throughout the
                day and night.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">Eco-Friendly</h3>
              <p className="mt-2 text-gray-600">
                We prioritize sustainability with responsibly sourced materials.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Experience the Huggies Difference
          </h2>
          <p className="my-4 text-gray-600">
            Give your baby the best care with Huggies diapers and wipes.
          </p>
          <Link
            href="/product"
            className="mt-10 rounded-full bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-red-600"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHuggies;
