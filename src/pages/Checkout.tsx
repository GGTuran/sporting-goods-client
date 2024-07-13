import { useState } from "react";
import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { TOrder } from "@/types/type";
import { clearOrderedItems } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  //getting all data from state saved by redux-persist
  const cart = useAppSelector((state) => state.cart.items);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    phone: "",
    deliveryAddress: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();

  //checking if the cart is empty
  if (!cart || cart.length === 0) {
    return <p>Cart is empty</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    const products = cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    const order: TOrder = {
      userName: userDetails.userName,
      email: userDetails.email,
      phone: userDetails.phone,
      deliveryAddress: userDetails.deliveryAddress,
      products,
      paymentMethod,
    };

    //using try catch for error handling
    try {
      await createOrder(order).unwrap();
      dispatch(clearOrderedItems());
      toast.success("Orders placed successfully!");
      navigate("/success");
    } catch (error) {
      toast.error("Error placing orders!");
      console.error("Error placing orders:", error);
    }
  };

  return (
    <div className="min-h-screen mb-5 rounded-2xl bg-gray-100 flex flex-col justify-center items-center">
      <Toaster />
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="userName"
          value={userDetails.userName}
          onChange={handleChange}
          placeholder="Name"
          className="input-field mb-4"
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-field mb-4"
        />
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="input-field mb-4"
        />
        <textarea
          name="deliveryAddress"
          value={userDetails.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="input-field mb-4"
        />
        <input
          type="text"
          value={paymentMethod}
          onChange={() => setPaymentMethod("Cash On Delivery")}
          placeholder="Payment Method"
          className="input-field mb-4"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlaceOrder}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
        >
          Place Order
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Checkout;
