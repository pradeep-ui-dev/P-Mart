import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "get/allProducts",
  async ({ limit, offset },{rejectWithValue}) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      return data.products;
      
    } catch (error) {
      return rejectWithValue({
        error,
        message: error.message  
      })
    }
  },
);