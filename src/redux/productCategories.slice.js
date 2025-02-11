import { createSlice } from "@reduxjs/toolkit";
import { fetchProductCategories } from "./product.category.api";

const initialState = {
    categories: [],
    loading: false,
    error: null
}
const productCategoriesSlice = createSlice({
    name: "productsCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload
        });
        builder.addCase(fetchProductCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
    }
})
export default productCategoriesSlice