/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { useCreateOrderMutation } from '@/redux/api/baseApi';
import { TOrder } from '@/types/type';
import { clearOrderedItems } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.items)
  console.log(cart[0].productId);
  console.log(cart[0].quantity);
  
  const [userDetails, setUserDetails] = useState({
    userName: '',
    email: '',
    phone: '',
    deliveryAddress: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();
  if (!cart || cart.length === 0 || !cart[0]?.productId) {
    console.error('Cart is empty');
    return <p>Cart is empty</p>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {

    if (!cart || cart.length === 0 || !cart[0]?.productId) {
        console.error('Cart is empty');
        return <p>Cart is empty</p>
      }
    const order: TOrder = {
      userName: userDetails.userName,
      email: userDetails.email,
      phone: userDetails.phone,
      deliveryAddress: userDetails.deliveryAddress,
      productId: cart[0].productId,
      quantity: cart[0].quantity,
      paymentMethod,
    };

    try {
      const { data } = await createOrder(order).unwrap(); // Assuming createOrder mutation returns the order data
      dispatch(clearOrderedItems(cart[0].productId)); // Clear cart after successful order placement
      console.log('Order placed successfully:', data);
      // Navigate to order success page or show success message
      navigate('/success');
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle error scenario, such as displaying an error message to the user
    }
  };

  return (
   <div>
     <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="userName"
          value={userDetails.userName}
          onChange={handleChange}
          placeholder="Name"
          className="input-field"
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="input-field"
        />
        <textarea
          name="deliveryAddress"
          value={userDetails.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="input-field"
        />
        <input
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          placeholder="Payment Method"
          className="input-field"
        />
        <button
          onClick={handlePlaceOrder}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Place Order
        </button>
      </div>
    </div>
   </div>
  );
};

export default Checkout;
