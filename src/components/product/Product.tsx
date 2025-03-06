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
    // nếu thêm cart vào toàn bộ thì dùng này
    // <div className="border rounded-lg p-4 shadow-md relative group transition-all duration-300">
    <div className="border rounded-lg p-3 shadow-md">
      {/* Hình ảnh sản phẩm */}
      <div className="relative w-full h-48 group">
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

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tên sản phẩm */}
      <h3 className="mt-2 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* Mô tả ngắn */}
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>

      {/* Đánh giá sao */}
      <div className="mt-1">
        <StarRating rating={product.star} />
      </div>

      {/* Giá sản phẩm */}
      <div className="mt-1 flex items-center space-x-2">
        <span className="text-lg font-bold text-red-500">
          VNĐ {product.promotionPrice}
        </span>
        <span className="text-gray-500 line-through"> VNĐ {product.price}</span>
      </div>
    </div>

  );
};


export default ProductCard;

