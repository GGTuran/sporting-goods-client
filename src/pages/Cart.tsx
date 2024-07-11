import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const dispatch = useAppDispatch();
    const cart = useAppSelector ((state) => state.cart.items);
    const navigate = useNavigate();

    const handleRemove = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId: string, quantity: number) => {
        dispatch(updateQuantity({ productId, quantity }));
      };

      const calculateTotal = () => {
        return cart.reduce((total, item) => {
        // Including 15% VAT
          return total + item.product.price * item.quantity;
        }, 0) * 1.15; 
      };

      const handleCheckout = () => {
        if(cart.every(item => item.product.stockQuantity >= item.quantity)){
            navigate('/checkout')
        }
      }

    return (
        <div className="min-h-screen">
            <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.productId}>
            <h2>{item.product.name}</h2>
            <p>Price: ${item.product.price}</p>
            <p>Quantity: 
              <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
              {item.quantity}
              <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)} disabled={item.quantity >= item.product.stockQuantity}>+</button>
            </p>
            <button onClick={() => handleRemove(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        <button onClick={handleCheckout} disabled={cart.some(item => item.product.stockQuantity < item.quantity)}>
          Proceed to Checkout
        </button>
      </div>
    </div>
        </div>
    );
};

export default Cart;