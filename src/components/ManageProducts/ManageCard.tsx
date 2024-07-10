/* eslint-disable @typescript-eslint/no-unused-vars */

import { useDeleteProductMutation } from "@/redux/api/baseApi";
import Rating from "react-rating";
import { Link } from "react-router-dom";

export type TProductCardProps = {
    _id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    stockQuantity: number;
    rating: number;
    price: number;
    image: string;

}

const ManageCard = ({ _id, name, description, category, brand, stockQuantity, rating, price, image}: TProductCardProps) => {

    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [category, setCategory] = useState("");
    // const [brand, setBrand] = useState("");
    // const [stockQuantity, setStockQuantity] = useState("");
    // const [rating, setRating] = useState("");
    // const [price, setPrice] = useState("");
    // const [image, setImage] = useState("");

    const [ deleteProduct ] = useDeleteProductMutation();

    const removeProduct = () => {
        deleteProduct(_id)
    }


    return (
        <div>
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
                src={image}
                alt="Product Image"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100  p-6">
                

                <h3 className="mt-4 text-lg font-medium text-black">
                  {brand}
                </h3>
                <h3 className="mt-4 text-lg font-medium text-black">
                 Category: {category}
                </h3>
                <h3 className="mt-4 text-lg font-medium text-black">
                  Name: {name}
                </h3>
                

                <p className="mt-1.5 text-sm font-medium text-black">{description}</p>
                {/* <p>{rating}</p> */}
                {/* <Rating
                initialRating={rating}
                readonly
                emptySymbol={<svg className="w-4 h-4 text-gray-300"><path fillRule="evenodd" d="M10 15l5.09 2.67-1.38-6.09L18 7.84l-6.18-.53L10 2l-1.82 5.31L2 7.84l4.29 3.74L4.91 17.67 10 15z" /></svg>}
                fullSymbol={<svg className="w-4 h-4 text-yellow-500"><path fillRule="evenodd" d="M10 15l5.09 2.67-1.38-6.09L18 7.84l-6.18-.53L10 2l-1.82 5.31L2 7.84l4.29 3.74L4.91 17.67 10 15z" /></svg>}
                /> */}

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-black font-medium">Price: ${price}</p>
                    <p className="text-black font-medium">Available: {stockQuantity}</p>
                  </div>
                 <div>
                 <Link className="flex justify-center items-center" to={`products/${_id}` }>
                 <button  className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
                    See More
                  </button></Link>
                 </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <button>Update component</button>
                    <button onClick={removeProduct} className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">Delete</button>
                </div>
              </div>
            </div>
          }
        </div>
      </main>
        </div>
    );
};

export default ManageCard;