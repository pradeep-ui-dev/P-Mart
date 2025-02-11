import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "get/allProducts",
  async ({ limit, offset }) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data.products;
  }
);

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
  },
});


export default productSlice;
