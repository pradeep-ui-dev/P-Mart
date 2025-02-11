import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products.slice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer
    }
})