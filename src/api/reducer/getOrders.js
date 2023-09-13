import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ordersThunk = createAsyncThunk('api/orders', async() => {
    const response = await axios.get('https://northwind.vercel.app/api/orders')
    return response.data
})

const orderSlice = createSlice({
    name: 'order',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(ordersThunk.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
        })
        .addCase(ordersThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(ordersThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default orderSlice.reducer