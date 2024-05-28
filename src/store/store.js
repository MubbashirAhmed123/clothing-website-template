import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartReducers'
export const cart=configureStore({
    reducer:{
        cart:cartSlice,
    }
})