/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";


const FeaturedSection = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery(undefined, {pollingInterval: 30000});
 

  if(isLoading) {
      return(
       <p className="text-2xl text-black flex justify-center items-center">Loading.....</p>
      )
  }


 
// const [ data, {is} ] = useGetAllProductsQuery(undefined,{pollingInterval:30000})

  //rtk query polling interval for fetching latest data
  return (
    <main className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.data.slice(0, 3).map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </main>
  );
};

export default FeaturedSection;
