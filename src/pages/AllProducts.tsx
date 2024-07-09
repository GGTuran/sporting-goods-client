/* eslint-disable @typescript-eslint/no-unused-vars */
;
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";


const AllProducts = () => {

    const { data: products, isLoading, isError } = useGetAllProductsQuery(undefined);
    console.log(products);

    if(isLoading) {
        return(
         <p className="text-2xl text-black flex justify-center items-center">Loading.....</p>
        )
    }

    return (
        <div>
            <h1>All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
                {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;