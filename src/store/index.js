import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import modalReduser from './modalDelivery/modalDeliverySlice'
import formReduser from './form/formSlice'


export const store = configureStore({
    reducer:{
       category: categoryReducer,
       product: productReducer,
       order:orderReducer,
       modal:modalReduser,
       form:formReduser,

    },

    middleware: getDefaultMiddleware=>{
       const mdws=getDefaultMiddleware().concat(localStorageMiddleware)
       console.log(mdws);
       return mdws
    } 
    
});