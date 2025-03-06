import React from 'react'
import Link from 'next/link'
import { HomeSlideComponent } from './components/HomeSlide'
import { homeSlides } from "./components/HomeSlide/helper";
import { categories } from "./components/ProductCategory/helper";
import { ProductCategory } from "./components/ProductCategory"
import { ProductCard } from "@/components/product";
import { products } from "../ProductPage/helper";
function HomePage() {
    const limitProducts = products.slice(0, 8);
    return (
        <div>
            <section className='w-full'>
                <HomeSlideComponent slides={homeSlides} />
            </section>

            <section>
                <div className="py-10">
                    <h3 className="text-center text-2xl font-bold">Browse The Range</h3>
                    <p className="text-center text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ProductCategory categories={categories} />
                </div>
            </section>

            <section className="container mx-auto px-4 py-10">
                <h2 className="text-center text-2xl font-bold mb-6">Our Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {limitProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link href="/" className="border px-4 py-2 rounded-md hover:bg-gray-200">
                        Show More
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default HomePage