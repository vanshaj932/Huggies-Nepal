import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-gray-400 shadow-lg">
      <Image className="w-full" layout="fill" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
