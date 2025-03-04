import React from 'react';
import Image from "next/image";

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
    <div className="w-full max-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Hình ảnh sản phẩm */}
      <div className="relative">
        <Image
          src={product.createImageProducts?.[0]?.link || "/default-image.jpg"}
          alt={product.name}
          width={200}
          height={180}
          className="w-full h-40 object-cover"
        />

        {/* Nhãn HOT */}
        {product.topHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12">
            HOT
          </div>
        )}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="p-3">
        <h3 className="text-sm font-bold">{product.name}</h3>
        <p className="text-gray-500 text-xs truncate">{product.description}</p>
        <div className="mt-1">
          <span className="text-sm font-bold text-black">
            VNĐ {product.promotionPrice.toLocaleString()}
          </span>
          <span className="text-gray-400 text-xs line-through ml-1">
            VNĐ {product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;