import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import AddProductModal from "./AddProductModal";
import ManageCard from "./ManageCard";

import Loading from "../Loading/Loading";
import { TProductCardProps } from "@/types/type";
import { JSX } from "react/jsx-runtime";

const ProductContainer = () => {
  //fetching data through rtk query
  const { data: products, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <div className="text-2xl text-black flex justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="m-10">
      <div className="flex m-10 justify-between mb-5">
        {/* addProduct */}
        <AddProductModal></AddProductModal>
        {/* updateProduct */}
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {/* productCard */}
          {products?.data?.map(
            (product: JSX.IntrinsicAttributes & TProductCardProps) => (
              <ManageCard key={product._id} {...product}></ManageCard>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
