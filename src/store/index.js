import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";


export const store = configureStore({
    reducer:{
       category: categoryReducer,
       product: productReducer,
       order:orderReducer
    },

    middleware: getDefaultMiddleware=>{
       const mdws=getDefaultMiddleware().concat(localStorageMiddleware)
       console.log(mdws);
       return mdws
    } 
    
});