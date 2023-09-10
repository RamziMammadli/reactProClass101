import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/getSlice";
import getSlice from "./reducer/getSlice";

export const store = configureStore({
    reducer: {
        get: getSlice
    }
    }
)