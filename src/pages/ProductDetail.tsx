// ProductDetail.js
import React from 'react';
import { useGetProductByIdQuery } from '@/redux/api/baseApi'; // Adjust path as per your project structure
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching product.</div>;
  if (!product) return <div className="text-center mt-8">Product not found.</div>;

  return (
    <div className="m-10  mx-auto px-4 mt-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{product.data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={product.data.image} alt={product.data.name} className="rounded-lg" />
          </div>
          <div>
            <p className="text-black mb-2">Description: {product.data.description}</p>
            <p className="text-black mb-2">Category: {product.data.category}</p>
            <p className="text-black mb-2">Brand: {product.data.brand}</p>
            <p className="text-black mb-2">Stock Quantity: {product.data.stockQuantity}</p>
            {/* Add more fields as needed */}
            <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
