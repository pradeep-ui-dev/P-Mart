import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails } from "./userDetails.api";

const initialState = {
    userDetail: null,
    loading: false,
    error: false,
};

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.pending, (state) => {
            state.loading = true;
            state.error = null
        });
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.userDetail = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });
    },
});
export default userDetailsSlice;
