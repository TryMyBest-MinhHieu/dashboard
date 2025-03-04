'use client';

import { ProductCard } from '@/components/product';
import React, { useState } from 'react';
import { products } from "./hepler";
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from "./components/Breadcrumb";
import { Pagination } from './components/Pagination';
import { motion } from "framer-motion";

function ProductPage() {
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
    const displayedProducts = products.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto px-4">
            {/* Banner */}
            <section className="relative w-full h-64 mb-6">
                <div className="relative w-full h-[300px]">
                    <Image
                        src="/rectangle1.png"
                        alt="Shop Banner"
                        width={1200}
                        height={400}
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-black">
                    <h1 className="text-[8rem] font-bold leading-none">Shop</h1>
                    <nav className="text-sm">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Breadcrumb />
                    </nav>
                </div>
            </section>

            {/* Bộ lọc & sắp xếp */}
            <section className="flex justify-between items-center py-7">
                <button className="px-4 py-2 border rounded-md">Filter</button>
                <div className="flex items-center space-x-4">
                    <p>Showing {startIndex + 1}-{endIndex} of {totalProducts} products</p>
                    <select className="border px-3 py-2 rounded-md">
                        <option>Default</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </section>

            <section>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayedProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </motion.div>
            </section>

            {/* Phân trang */}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default ProductPage;
