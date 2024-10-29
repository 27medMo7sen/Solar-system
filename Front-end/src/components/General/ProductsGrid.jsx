import { useState } from 'react';
import { products } from "../../Data";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col">
      <div className="max-w-full grid gap-3 mx-xl:grid-cols-3 mx-lg:grid-cols-2 mx-md:grid-cols-1 grid-cols-4 font-bold bg-slate-100 p-2 border-b-2 border-gray-400 pb-4 text-center">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      
      <div className="flex justify-center items-center space-x-2 mt-4 mb-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1 ? 'bg-Primary-button text-white' : 'bg-white text-gray-600'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};