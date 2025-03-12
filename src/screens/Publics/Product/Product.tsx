import {IconFiltering} from '@/assets';
import {ProductCard} from '@/components/product';
import {useState} from 'react';
import Breadcrumb from './components/Breadcrumb';
import {products} from './hepler';
import Pagination from './components/Pagination';

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
          <img
            src="/Rectangle1.png"
            alt="Shop Banner"
            width={1200}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-black">
          <h1 className="text-3xl font-bold leading-none">Shop</h1>
          <nav className="text-sm py-2">
            <Breadcrumb />
          </nav>
        </div>
      </section>

      {/* Bộ lọc & sắp xếp */}
      <section className="flex items-center justify-between py-7">
        <div className="flex items-center space-x-2">
          <IconFiltering />
          <button className="px-4 py-2 rounded-md">Filter</button>
          <p className="text-gray-700">
            Showing {startIndex + 1}-{endIndex} of {totalProducts} products
          </p>
        </div>

        <div>
          <select className="border px-3 py-2 rounded-md">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </section>

      {/* Products */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ProductPage;
