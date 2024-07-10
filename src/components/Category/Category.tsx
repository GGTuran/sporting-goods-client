import { Link } from "react-router-dom";
import bannerImageOne from "@/assets/images/logo.svg"; // Replace with your actual image path

const Category = () => {
    return (
        <div className="bg-white mt-10 px-5 lg:px-10 lg:py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-3xl lg:text-4xl font-medium my-8 lg:my-12">Categories</h1>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                    {/* Sample category cards */}
                    <div>
                        <Link to="/category">
                            <div className="relative rounded-lg overflow-hidden bg-cover bg-center h-60 lg:h-80 shadow-lg hover:scale-105 transition-transform" style={{ backgroundImage: `url('https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg')` }}>
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h5 className="text-white text-lg lg:text-2xl font-bold px-4 py-2 bg-black bg-opacity-50">Tennis</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to="/category">
                            <div className="relative rounded-lg overflow-hidden bg-cover bg-center h-60 lg:h-80 shadow-lg hover:scale-105 transition-transform" style={{ backgroundImage: `url(${bannerImageOne})` }}>
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h5 className="text-white text-lg lg:text-2xl font-bold px-4 py-2 bg-black bg-opacity-50">Category 2</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to="/category">
                            <div className="relative rounded-lg overflow-hidden bg-cover bg-center h-60 lg:h-80 shadow-lg hover:scale-105 transition-transform" style={{ backgroundImage: `url(${bannerImageOne})` }}>
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h5 className="text-white text-lg lg:text-2xl font-bold px-4 py-2 bg-black bg-opacity-50">Category 3</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
