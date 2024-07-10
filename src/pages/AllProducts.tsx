/* eslint-disable @typescript-eslint/no-unused-vars */

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

    // const { category } = useParams<{ category: string }>();
    // const filteredProducts = products.filter(
    //     (product: any) => product.category.toLowerCase() === category
    //   );

    return (
        <div>
            
            <h1 className="text-center text-3xl font-semibold my-10">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
                {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;