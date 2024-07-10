
import bannerimageone from "@/assets/images/logo.svg"
// import bannerimagetwo from "@/assets/m1_banner_01.jpg"
// import bannerimagethree from "@/assets/m1_slide_03.jpeg"
import { Link } from "react-router-dom"



const Category = () => {


    return (
        <div className=" bg-white lg:mt-20 lg:px-20 lg:my-20  px-5">
            <div className="  ">
                <h1 className="text-center text-3xl font-medium my-10">
                    Category
                </h1>

                <div className="grid lg:grid-cols-3 lg:gap-10 gap-5  mt-5 p-5 lg:my-10">
                    
                    <div>
                    <Link to="/category">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url('https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg')` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans">Tennis</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/category">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url(${bannerimageone})` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans">Tennis</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/category">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url(${bannerimageone})` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans">Category 1</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Category;