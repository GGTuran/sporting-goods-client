import ProductContainer from "@/components/ManageProducts/ProductContainer";



const ManageProducts = () => {
    return (
        <div>
        <h1 className="text-center text-3xl font-semibold my-10">Manage Products</h1>
        {/* ManageProductcontainer */}
        <ProductContainer></ProductContainer>
    </div>
    );
};

export default ManageProducts;