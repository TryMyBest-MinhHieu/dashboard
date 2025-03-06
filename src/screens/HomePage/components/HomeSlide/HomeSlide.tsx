"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

interface HomeSlide {
    name: string;
    image: string;
    link: string;
    title: string;
    detail: string;
    status: boolean;
}

interface HomeSlideProps {
    slides?: HomeSlide[];
}

const HomeSlideComponent: React.FC<HomeSlideProps> = ({ slides = [] }) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
            }}
            className="w-full h-[450px] lg:h-[550px]"
        >
            {slides
                .filter((slide) => slide.status)
                .map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        {/* Banner */}
                        <Image
                            src={slide.image}
                            alt={slide.name}
                            fill
                            className="object-cover w-full h-full"
                        />

                        {/* Nội dung */}
                        <div className="absolute right-5 lg:right-10 top-1/2 transform -translate-y-1/2 bg-[#fdf1e2] p-4 lg:p-8 rounded-lg shadow-lg max-w-[350px] lg:max-w-[450px] text-left">
                            <p className="text-xs lg:text-sm uppercase text-gray-600">{slide.name}</p>
                            <h2 className="text-2xl lg:text-4xl font-bold text-[#b68d40]">
                                {slide.title}
                            </h2>
                            <p className="mt-1 lg:mt-2 text-gray-700 text-sm lg:text-base">
                                {slide.detail}
                            </p>
                            <Link href={slide.link}>
                                <button className="mt-3 lg:mt-4 px-5 lg:px-6 py-2 bg-[#b68d40] text-white rounded-lg">
                                    BUY NOW
                                </button>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

            {/* Nút điều hướng */}
            {/* <div className="custom-prev absolute top-1/2 -left-5 lg:-left-8 transform -translate-y-1/2 cursor-pointer text-black text-3xl font-bold z-10">
                ❮
            </div>
            <div className="custom-next absolute top-1/2 -right-5 lg:-right-8 transform -translate-y-1/2 cursor-pointer text-black text-3xl font-bold z-10">
                ❯
            </div> */}

            {/* Pagination */}
            <div className="swiper-pagination"></div>
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: white !important; 
                    opacity: 0.7 !important;
                    width: 10px;
                    height: 10px;
                }
                .swiper-pagination-bullet-active {
                    background-color: #b68d40 !important;
                    opacity: 1 !important;
                }
            `}</style>

        </Swiper>
    );
};

export default HomeSlideComponent;
