/* eslint-disable @typescript-eslint/no-unused-vars */

import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";


const AllProducts = () => {

    // const clearFilters = () => {
    //     setFilters({
    //       category: "",
    //       brand: "",
    //       price: "",
    //       rating: ""
    //     });
    //     setSearchTerm("");
    //   };

    const { data: products, isLoading, isError } = useGetAllProductsQuery(undefined, {pollingInterval: 30000});
 

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
        <div className="min-h-screen">
            
            <h1 className="text-center text-3xl font-semibold my-10">All Products</h1>
            <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mb-5">
                {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            {/* <button onClick={clearFilters} className="border p-2 rounded bg-red-500 text-white">Clear Filters</button> */}
        </div>
    );
};

export default AllProducts;