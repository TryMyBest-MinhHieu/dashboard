import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Link} from 'react-router-dom';

interface Category {
  code: string;
  name: string;
  parentId: number;
  image: string;
  link: string;
  title: string;
  detail: string;
  metaDescriptions: string;
  metaKeywords: string;
  status: boolean;
}

interface CategoryProps {
  categories: Category[];
}

const ProductCategory: React.FC<CategoryProps> = ({categories}) => {
  // Lọc danh mục có status === true
  const activeCategories = categories.filter((category) => category.status);

  return (
    <div className="max-w-5xl mx-auto px-9 md:px-7">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1024: {slidesPerView: 3},
        }}
        className="relative mySwiper"
      >
        {activeCategories.map((category) => (
          <SwiperSlide key={category.code} className="flex justify-center">
            <Link to={category.link} className="block text-center">
              <div className="relative h-[600px] md:w-full md:h-[400px] rounded-lg overflow-hidden group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Hiển thị title khi hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.title}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{category.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-button-next {
          right: -5px;
        }
        .swiper-button-prev {
          left: -5px;
        }
      `}</style>
    </div>
  );
};

export default ProductCategory;
