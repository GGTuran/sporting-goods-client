/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

const FeaturedSection = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 30000,
  }); //rtk query polling interval for fetching latest data

  if (isLoading) {
    return (
      <p className="text-2xl text-black flex justify-center items-center">
        {/* //adding a skeleton to show while loading data */}
        <Loading></Loading>
      </p>
    );
  }

  return (
    <section className="bg-background py-12 mt-5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center font-medium mb-6">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.data.slice(0,4).map((product: { _id: any }): any => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
