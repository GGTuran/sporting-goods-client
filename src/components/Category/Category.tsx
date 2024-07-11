import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImageOne from "@/assets/images/logo.svg"; // Replace with your actual image path

const Category = () => {
    const cardVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
    };

    return (
        <div className="bg-white px-5 mb-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-3xl lg:text-4xl font-medium my-8 lg:my-12">Categories</h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {/* Sample category cards */}
                    <motion.div
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        style={{ paddingBottom: "56.25%" }}
                    >
                        <Link to="/category">
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity">
                                <h5 className="text-white text-lg lg:text-xl font-bold px-4 py-2">{/* Category Name */}</h5>
                            </div>
                            <img
                                src="https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg"
                                alt="Category Image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        style={{ paddingBottom: "56.25%" }}
                    >
                        <Link to="/category">
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity">
                                <h5 className="text-white text-lg lg:text-xl font-bold px-4 py-2">{/* Category Name */}</h5>
                            </div>
                            <img
                                src="https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg"
                                alt="Category Image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        style={{ paddingBottom: "56.25%" }}
                    >
                        <Link to="/category">
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity">
                                <h5 className="text-white text-lg lg:text-xl font-bold px-4 py-2">{/* Category Name */}</h5>
                            </div>
                            <img
                                src="https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg"
                                alt="Category Image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Category;
