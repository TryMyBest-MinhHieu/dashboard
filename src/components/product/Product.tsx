import React from 'react';
import Image from "next/image";
import { StarRating } from "../starRating";

interface Product {
  name: string;
  code: string;
  metaTitle: string;
  description: string;
  price: number;
  promotionPrice: number;
  includedVAT: boolean;
  quantity: number;
  productCategoryId: number;
  detail: string;
  metaKeywords: string;
  metaDescriptions: string;
  topHot: boolean;
  viewCount: number;
  star: number;
  vote: number;
  status: boolean;
  createImageProducts: {
    link: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {/* Hình ảnh sản phẩm */}
      <div className="relative w-full h-60">
        <Image
          src={product.createImageProducts?.[0]?.link || "/default-image.jpg"}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* Nhãn HOT */}
        {product.topHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12">
            HOT
          </div>
        )}

      </div>

      {/* Tên sản phẩm */}
      <h3 className="mt-3 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* Mô tả ngắn */}
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>

      {/* Đánh giá sao */}
      <div className="mt-2">
        <StarRating rating={product.star} />
      </div>

      {/* Giá sản phẩm */}
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-lg font-bold text-red-500">
          VNĐ {product.promotionPrice}
        </span>
        <span className="text-gray-500 line-through"> VNĐ {product.price}</span>
      </div>
    </div>
  );
};


export default ProductCard;

