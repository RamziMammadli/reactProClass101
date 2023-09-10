import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProductsThunk = createAsyncThunk('api/get', async() => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products
} )

const getSlice = createSlice({
    name: 'get',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }
})

export default getSlice.reducer