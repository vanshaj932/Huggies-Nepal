// components/ProductCard.tsx
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
    <div className="bg-white w-auto rounded-3xl shadow-md p-[10px] mx-auto h-[347px]">
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Product Details */}
      <h3 className="text-lg font-bold text-gray-800 text-center mb-2 h-[56px]">
        {productName}
      </h3>
      <p className="text-sm text-gray-600 text-center mb-4">Size {size}</p>

      {/* Action Buttons */}
      <div className="flex justify-center mb-4 w-full">
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition">
          Buy now
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-semibold shadow hover:bg-gray-200 transition">
          See details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
