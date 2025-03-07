import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetails = createAsyncThunk(
    "get/userDetails",
    async () => {
        try {
            const res = await axios({
                method: "GET",
                url: "http://localhost:8000/users/profile",
                headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            //console.log(res.data)
            return res.data;
        } catch (error) {
        console.error("Axios Error:", error);
        if (error.response?.status === 503) {
            localStorage.removeItem("token");
            window.location.href = "/signin"; 
        }

        toast.error("Profile request failed");
        return rejectWithValue(error.response?.data || "Request failed");
        }
    }
);
