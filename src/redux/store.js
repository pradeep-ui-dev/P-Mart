import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products.slice";
import cartSlice from "./cartSlice";
import productCategoriesSlice from "./productCategories.slice";
import userDetailsSlice from "./userDetails.slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        productsCategories: productCategoriesSlice.reducer,
        userDetails: userDetailsSlice.reducer
    }
})