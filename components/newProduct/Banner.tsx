import Image from "next/image";
import Link from "next/link";
import React from "react";
const products = [
  {
    name: "Huggies Nature Made Diapers",
    link: "/demo/1",
    color: "bg-blue-500",
  },
  {
    name: "Huggies Skin Perfect Diapers",
    link: "/demo/1",
    color: "bg-yellow-500",
  },
  {
    name: "Huggies Overnite Diapers",
    link: "demo/1",
    color: "bg-red-500",
  },
  {
    name: "Huggies Dry Comfort Diapers",
    link: "/demo/1",
    color: "bg-red-500",
  },
];

const Banner = () => {
  return (
    <div className="mx-[200px] hidden grid-cols-2 gap-4 py-4 tablet:grid tablet:grid-cols-4">
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.link}
          className={`${product.color} hidden w-[300px] text-wrap rounded-full px-6 py-3 text-center font-semibold text-white transition duration-300 hover:opacity-80 tablet:flex`}
        >
          <Image
            src="/assets/images/logo-huggies.png"
            alt="Huggies Logo"
            width={50}
            height={50}
          />
          {product.name}
        </Link>
      ))}
    </div>
  );
};

export default Banner;
