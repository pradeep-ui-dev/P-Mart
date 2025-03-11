import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./product.api";

const initialState = {
  products: [],
  loading: false,
  error: false,
  errorMessage: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => {
        state.products = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      fetchProducts.rejected,
      (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload.message
        console.log(action.payload.message)
      }
    );
  },
});

export default productSlice;
