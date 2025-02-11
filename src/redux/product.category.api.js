import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductCategories = createAsyncThunk(
    "get/productCategories",
    async (_, {rejectWithValue}) => {
        try{
            const response = await fetch(`https://dummyjson.com/products/categories`);
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue({
                error,
                message: error.message
            })
        }
    }
)