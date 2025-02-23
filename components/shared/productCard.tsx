// components/ProductCard.tsx
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  size: string;
  onBuyNow?: () => void;
  onSeeDetails?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  size,
  onBuyNow,
  onSeeDetails,
}) => {
  return (
    <div className="mx-auto h-[347px] w-auto rounded-3xl bg-white p-[10px] shadow-md">
      {/* Product Image */}
      <Image
        src={imageUrl}
        alt={productName}
        width={50}
        height={100}
        className="mb-4 h-40 w-full object-contain"
      />

      {/* Product Details */}
      <h3 className="mb-2 h-[56px] text-center text-lg font-bold text-gray-800">
        {productName}
      </h3>
      <p className="mb-4 text-center text-sm text-gray-600">Size {size}</p>

      {/* Action Buttons */}
      <div className="mb-4 flex w-full justify-center">
        <button className="flex items-center rounded-full bg-green-500 px-4 py-2 font-semibold text-white shadow transition hover:bg-green-600">
          Buy now
        </button>
        <button className="flex items-center rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-600 shadow transition hover:bg-gray-200">
          See details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
