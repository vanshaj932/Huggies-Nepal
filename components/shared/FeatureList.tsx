"use client";
import React from "react";

const FeatureList = () => {
  const features = [
    "The surface of the contact is a broad honeycomb",
    "Organic cotton components",
    "0% Perfume, alcohol and parabens",
  ];

  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center bg-white shadow-sm border border-gray-200 rounded-lg p-4"
        >
          <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-4">
            {index + 1}
          </span>
          <p className="text-green-700 text-sm font-medium">{feature}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
