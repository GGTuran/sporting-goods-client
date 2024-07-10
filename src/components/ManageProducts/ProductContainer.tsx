import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";


const ProductContainer = () => {

    const { data: products, isLoading,  } = useGetAllProductsQuery(undefined);
    console.log(products);

    if(isLoading) {
        return(
         <p className="text-2xl text-black flex justify-center items-center">Loading.....</p>
        )
    }

    return (
        <div>
            <div className="flex justify-between mb-5">
                {/* addProduct */}
                {/* updateProduct */}
            </div>
            <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
         {/* productCard */}
         {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
        </div>
     
      </div>
        </div>
    );
};

export default ProductContainer;