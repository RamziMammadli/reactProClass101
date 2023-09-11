import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProductsThunk = createAsyncThunk('api/get', async() => {
    const response = await axios.get('http://localhost:3000/api/products')
    return response.data
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