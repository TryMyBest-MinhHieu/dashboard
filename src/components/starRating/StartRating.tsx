import { IconStarFull, IconStarEmpty } from '@/assets';

const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);

    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="relative w-5 h-5">
                    {/* Ngôi sao rỗng (trắng) */}
                    <IconStarEmpty
                        className="w-full h-full text-gray-300"
                    />

                    {/* Ngôi sao đầy (vàng) */}
                    {i < fullStars && (
                        <IconStarFull
                            className="absolute top-0 left-0 w-full h-full text-yellow-400"
                        />
                    )}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
