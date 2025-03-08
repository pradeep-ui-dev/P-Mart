import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

export const fetchProducts = createAsyncThunk(
  "get/allProducts",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const response = await fetch({
        url: `https://dummyjson.com/products?limit=${limit}&offset=${offset}`,
        
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      const data = await response.json();
      console.log(data)
      return data.products;
    } catch (error) {
      if(error.statusCode === 401) {
        localStorage.removeItem('token');
        Navigate('/login')
      }
      return rejectWithValue({
        error,
        message: error.message,
      });
    }
  }
);
