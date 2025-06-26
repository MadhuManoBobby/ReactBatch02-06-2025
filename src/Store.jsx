import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slices/Slice'

export const Store = configureStore({
    devTools:true,
    reducer:{
        customers: customerReducer
    }
})