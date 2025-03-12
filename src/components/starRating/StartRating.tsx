import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

const renderStarRating = (rating: number) => {
  if (rating <= 0) {
    return (
      <div className="flex items-center">
        <div className="flex mr-1">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={`empty-star-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ scale: 0.5 }}
            >
              <Star size={16} className="text-gray-300" />
            </motion.span>
          ))}
        </div>
        <span className="text-xs text-gray-500">(0.0)</span>
      </div>
    );
  }

  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  const hasHalfStar = decimalPart > 0 && decimalPart < 1;

  const stars = [];

  // Thêm các sao đầy
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <motion.span
        key={`star-${i}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        whileHover={{ scale: 1.3 }}
      >
        <Star size={16} className="fill-yellow-400 text-yellow-400" />
      </motion.span>
    );
  }

  // Thêm nửa sao nếu có
  if (hasHalfStar) {
    stars.push(
      <motion.span
        key="half-star"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: fullStars * 0.1 }}
        whileHover={{ scale: 1.3 }}
      >
        <StarHalf size={16} className="fill-yellow-400 text-yellow-400" />
      </motion.span>
    );
  }

  // Thêm sao rỗng để đủ 5 sao
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <motion.span
        key={`empty-star-${i}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1,
        }}
        whileHover={{ scale: 1.3 }}
      >
        <Star size={16} className="text-gray-300" />
      </motion.span>
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex mr-1">{stars}</div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs text-gray-500"
      >
        ({rating.toFixed(1)})
      </motion.span>
    </div>
  );
};

export default renderStarRating;
