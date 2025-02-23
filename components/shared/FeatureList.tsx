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
          className="flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <span className="mr-4 flex size-8 items-center justify-center rounded-full bg-green-500 font-bold text-white">
            {index + 1}
          </span>
          <p className="text-sm font-medium text-green-700">{feature}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
