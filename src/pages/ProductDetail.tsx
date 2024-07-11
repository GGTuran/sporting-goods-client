
import { useGetProductByIdQuery } from '@/redux/api/baseApi'; // Adjust path as per your project structure
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const cartItem = cart.find(item => item.productId === productId);

  const handleAddToCart = () => {
    // Implement add to cart functionality
    // Example logic: dispatch an action to add product to cart state
    //will dispatch
    console.log('Adding product to cart:', product.data);

    console.log(dispatch(addToCart({ product: product.data})),'to state')

    if(product) {
      dispatch(addToCart({ product: product.data}));
    }

  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching product.</div>;
  if (!product) return <div className="text-center mt-8">Product not found.</div>;

  const isButtonDisabled = cartItem && cartItem.quantity >= product.data.stockQuantity;

  return (
    <div className="m-10  mx-auto px-4 mt-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{product.data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={product.data.image} alt={product.data.name} className="rounded-lg" />
          </div>
          <div>
            <p className="text-black mb-2">Description: {product.data.description}</p>
            <p className="text-black mb-2">Brand: {product.data.brand}</p>
            <p className="text-black mb-2">Stock Quantity: {product.data.stockQuantity}</p>
            <p className="text-black mb-2">Price: ${product.data.price}</p>
            {/* Add more fields as needed */}
            <button onClick={handleAddToCart} disabled={isButtonDisabled} className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
            {isButtonDisabled ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
