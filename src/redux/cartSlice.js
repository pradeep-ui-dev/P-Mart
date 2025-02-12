import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.cartItems.push({ ...product, quantity: 1 });
            state.totalQuantity ++;
            state.totalPrice += product.price
        },
        removeFromCart: (state, action) => {
            const removedItem = state.cartItems.find(item => item.id === action.payload)
            if(removedItem){
                state.totalQuantity -= removedItem.quantity
                state.totalPrice -= removedItem.price * removedItem.quantity;
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem) {
                const quantityDifference = quantity - existingItem.quantity;
                state.totalQuantity += quantityDifference;
                state.totalPrice += quantityDifference * existingItem.price;
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0
            state.totalPrice = 0
        },
    },
});
export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    } = cartSlice.actions;
export default cartSlice;
