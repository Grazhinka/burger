import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POCTFIX } from "../../const";

const initialState = {
    category: [],
    error: '',
    activeCategory: 0,
  };

export const categoryRequestAsync= createAsyncThunk(
    'category/fetch', ()=>{
      return fetch(`${API_URI}${POCTFIX}/category`)
         .then(req=>req.json())
         .catch(error=>({error}))
    }
    )

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        changeCategory(state,action){
            state.activeCategory = action.payload.indexCategory
        }
    },
    /*extraReducers:{
        [categoryRequestAsync.pending.type]:(state)=>{
             state.error='';
        },
        [categoryRequestAsync.fulfilled.type]:(state,action)=>{
            state.error='';
            state.category=action.payload;
       },
       [categoryRequestAsync.rejected.type]:(state,action)=>{
           state.error=action.payload.error;
      }
    }*/
    extraReducers:builder=>{
        builder
        .addCase(categoryRequestAsync.pending.type,state=>{
            state.error='';
        })
        .addCase(categoryRequestAsync.fulfilled.type,(state,action)=>{
            state.error='';
            state.category=action.payload;
        })
        .addCase(categoryRequestAsync.rejected.type,(state,action)=>{
            state.error=action.payload.error;
        })
    }
});

export const {changeCategory}= categorySlice.actions;

export default categorySlice.reducer;

