import { TProductCardProps } from "@/types/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
    productId : string;
    quantity: number;
    product: TProductCardProps;
};

type TInitialState = {
    items: CartItem[];
};

const initialState: TInitialState = {
    items : [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<{ product: TProductCardProps }>) => {
            const { product } = action.payload;
            const existingProduct = state.items.find(item => item.productId === product._id);

            if(existingProduct) {
                if( existingProduct.quantity < product.stockQuantity) {
                    existingProduct.quantity++;
                }
            } else {
                state.items.push({ productId: product._id, quantity: 1, product });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
          },
          updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
            const { productId, quantity } = action.payload;
            const existingProduct = state.items.find(item => item.productId === productId);
      
            if (existingProduct && quantity <= existingProduct.product.stockQuantity) {
              existingProduct.quantity = quantity;
            }
          },
          clearOrderedItems: (state, action: PayloadAction<string[]>) => {
            state.items = state.items.filter(item => !action.payload.includes(item.productId));
          }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearOrderedItems } = cartSlice.actions;
export default cartSlice.reducer;