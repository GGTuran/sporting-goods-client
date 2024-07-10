/* eslint-disable @typescript-eslint/no-unused-vars */

import Rating from "react-rating";
import { Link } from "react-router-dom";


const ProductCard = ({ product }: any) => {
    console.log(product);
    console.log('brand, category, description, image, name, price, rating, stockQuantity, _id')
  return (
    <div className="">
      <main className="m-10 ">
        <div className="">
          {
            <div className="rounded-2xl group relative block overflow-hidden">
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-black transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={product.image}
                alt="Product Image"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100  p-6">
                

                <h3 className="mt-4 text-lg font-medium text-black">
                  {product.brand}
                </h3>
                <h3 className="mt-4 text-lg font-medium text-black">
                 Category: {product.category}
                </h3>
                <h3 className="mt-4 text-lg font-medium text-black">
                  Name: {product.name}
                </h3>
                

                <p className="mt-1.5 text-sm font-medium text-black">{product.description}</p>
                {/* <p>{product.rating}</p> */}
                <Rating
                initialRating={product.rating}
                readonly
                emptySymbol={<svg className="w-4 h-4 text-gray-300"><path fillRule="evenodd" d="M10 15l5.09 2.67-1.38-6.09L18 7.84l-6.18-.53L10 2l-1.82 5.31L2 7.84l4.29 3.74L4.91 17.67 10 15z" /></svg>}
                fullSymbol={<svg className="w-4 h-4 text-yellow-500"><path fillRule="evenodd" d="M10 15l5.09 2.67-1.38-6.09L18 7.84l-6.18-.53L10 2l-1.82 5.31L2 7.84l4.29 3.74L4.91 17.67 10 15z" /></svg>}
                />

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-black font-medium">Price: ${product.price}</p>
                    <p className="text-black font-medium">Available: {product.stockQuantity}</p>
                  </div>
                 <div>
                 <Link className="flex justify-center items-center" to={`/product/${product._id}` }>
                 <button  className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
                    See More
                  </button></Link>
                 </div>
                </div>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default ProductCard;
