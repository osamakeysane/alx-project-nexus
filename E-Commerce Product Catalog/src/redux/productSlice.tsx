import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// Define the product type
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

// Define the slice state type
interface ProductState {
  products: Product[];
}
// Initial state with proper typing
const initialState: ProductState = {
  products: [],
};
// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
