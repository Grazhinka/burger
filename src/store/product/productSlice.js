import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POCTFIX } from "../../const";

const initialState={
    products:[],
    error:'',
};

export const productRequestAsync = createAsyncThunk(
    'product/fetch', (category)=>
    fetch(`${API_URI}${POCTFIX}?category=${category}`)
    .then(req=>req.json())
    .catch(error=>({error}))
)

const productSlice = createSlice({
    name:'product',
    initialState,
    extraReducers:builder=>{
        builder
        .addCase(productRequestAsync.pending,state=>{
            state.error=''
        })
        .addCase(productRequestAsync.fulfilled,(state,action)=>{
            state.error='';
            state.products=action.payload
        })
        .addCase(productRequestAsync.rejected,(state,action)=>{
            state.error=action.payload.error
        })
    }
});

export default productSlice.reducer