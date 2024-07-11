import ProductContainer from "@/components/ManageProducts/ProductContainer";



const ManageProducts = () => {
    return (
        <div className="min-h-screen">
        <h1 className="text-center text-3xl font-semibold mb-10">Manage Products</h1>
        {/* ManageProductcontainer */}
        <ProductContainer></ProductContainer>
    </div>
    );
};

export default ManageProducts;