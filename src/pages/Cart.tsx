import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
    toast.success("Item removed from cart");
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
    toast.success("Cart updated");
  };

  //calculating total price with 15% vat
  const calculateTotal = () => {
    return (
      cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0) * 1.15
    ); 
  };

  const handleCheckout = (productId?: string) => {
    if (productId) {
      navigate(`/checkout?productId=${productId}`);
    } else {
      if (cart.every((item) => item.product.stockQuantity >= item.quantity)) {
        navigate("/checkout");
      } else {
        toast.error("Some items are out of stock");
      }
    }
  };

  return (
    <div className="min-h-screen mb-5 rounded-2xl bg-gray-100 flex flex-col items-center py-10">
      <Toaster />
      <h1 className="text-3xl font-medium mb-8">Cart</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {cart.length > 0 ? (
          <ul className="space-y-6">
            {cart.map((item) => (
              <motion.li
                key={item.productId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p>Price: ${item.product.price.toFixed(2)}</p>
                  <div>
                    <label htmlFor="Quantity" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <div className="flex items-center rounded border border-gray-200">
                      <button
                      onClick={() =>
                        handleQuantityChange(item.productId, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                        type="button"
                        className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={item.quantity}
                        className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                       

                      <button
                        onClick={() =>  handleQuantityChange(item.productId, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.product.stockQuantity}
                        type="button"
                        className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleCheckout(item.productId)}
                      className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                    >
                      Order This Item
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-medium">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCheckout()}
              disabled={cart.some(
                (item) => item.product.stockQuantity < item.quantity
              )}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              Proceed to Checkout
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
