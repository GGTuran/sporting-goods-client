import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// creating dummy image data for showing categories
const categories = [
  {
    name: "Tennis",
    image:
      "https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg",
  },
  {
    name: "Football",
    image: "https://i.ibb.co/Pm2XDkF/alex-AOL4-f-DQ3-M-unsplash.jpg",
  },
  {
    name: "Cricket",
    image:
      "https://i.ibb.co/m5mzMNS/chirayu-trivedi-i-DTDv-SDEVjw-unsplash.jpg",
  },
];

// category card will show all to category by a card
const CategoryCard = ({ category }: { category: any }) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  // will use motion dev for animation

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      style={{ paddingBottom: "56.25%" }}
    >
      <Link to={`/products?category=${encodeURIComponent(category.name)}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity">
          <h5 className="text-white text-lg lg:text-xl font-bold px-4 py-2">
            {category.name}
          </h5>
        </div>
        <img
          src={category.image}
          alt={`${category.name} Category`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Link>
    </motion.div>
  );
};

const Category = () => {
  return (
    <div className="bg-white px-5 mb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-medium my-8 lg:my-12">
          Categories
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* maping all the categories */}
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
