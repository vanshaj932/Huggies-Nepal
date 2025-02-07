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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-400">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
