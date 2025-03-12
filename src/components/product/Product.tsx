import React, { useState } from "react";
import { motion } from "framer-motion";
import { renderStarRating } from "../starRating";

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      className="product-card group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Ảnh sản phẩm */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        {product.topHot && (
          <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}

        {/* Hiệu ứng loading */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Hình ảnh sản phẩm */}
        <img
          src={product.createImageProducts?.[0]?.link || "/default-image.jpg"}
          alt={product.name}
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isImageLoaded ? "scale-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Nội dung sản phẩm */}
      <div className="p-4">
        <div className="text-sm text-gray-500 uppercase mb-1">
          {product.metaTitle}
        </div>

        <h3 className="font-medium text-foreground/90 text-xl group-hover:text-foreground transition-colors duration-300">
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="mt-1 mb-2">{renderStarRating(product.star)}</div>

        {/* Mô tả sản phẩm */}
        <p className="mt-1 text-sm text-foreground/60 line-clamp-2">
          {product.description}
        </p>

        {/* Giá sản phẩm */}
        <div className="mt-4 flex items-end gap-2">
          <p className="font-bold text-xl text-foreground">{product.price}</p>
          <p className="text-gray-500 line-through text-sm">
            {product.promotionPrice}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
