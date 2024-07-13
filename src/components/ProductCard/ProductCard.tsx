/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "../ui/Rating";

const ProductCard = ({ product }: any) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
        <p className="text-sm mb-4">{product.brand}</p>
        <p className="text-sm mb-4">{product.description}</p>
        <div className="flex items-center mb-2 justify-between">
          <span className="flex gap-2">{Rating(product.rating)}</span>
          <span className="font-medium">Stock:{product.stockQuantity}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">${product.price}</span>
          <Link
            className="flex justify-center items-center"
            to={`/product/${product._id}`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              view More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
