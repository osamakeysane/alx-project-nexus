import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // ✅ type-only import
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}
interface CartState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        // Product already in cart, increment quantity and total price
        itemIndex.quantity! += 1;
        itemIndex.totalPrice! += newItem.price;
      } else {
        // Product not in cart, add it
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update overall cart totals
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
