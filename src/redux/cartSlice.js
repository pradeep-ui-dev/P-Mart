import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./products.slice";

const initialState = {
    cartItems : [],
    products : {
        loading: true,
        totalCount: 0
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.cartItems.push({...product, quantity: 1});
            state.countCartItems += 1 
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if(existingItem){
                existingItem.quantity = quantity
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    }
})
export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions
export default cartSlice;
