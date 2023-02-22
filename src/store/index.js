import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";



export const store = configureStore({
    reducer:{
       category: categoryReducer,
    }
});