import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POCTFIX } from "../../const";

const initialState={
    orderList: JSON.parse(localStorage.getItem('order') || '[]'),
    orderGoods:[],
    totalPrice:0,
    totalCount:0,
    error:[]
};


export  const localStorageMiddleware= store=> next=>action=>{
    console.log(next(action))
    const nextAction = next(action);
    if(nextAction.type.startsWith('order/')){
        const orderList=store.getState().order.orderList;
        console.log(orderList);
        localStorage.setItem('order', JSON.stringify(orderList));
    }
    return nextAction;
}


export const orderRequestAsync=createAsyncThunk(
    'order/fetch',
    (_,{getState})=>{
        const listId= getState().order.orderList.map(item=>item.id)
        return fetch(`${API_URI}${POCTFIX}?list=${listId}`)
        .then(req=>req.json())
        .catch(error=>({error}));
    }
)


const orderSlice= createSlice({
    name:'order',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            const product=state.orderList.find(item=>item.id===action.payload.id);

            if(product){
                product.count+=1;
            }else{
            state.orderList.push({...action.payload, count:1})
            }
        }
    },
    extraReducers: builder=>{
        builder
          .addCase(orderRequestAsync.pending,(state)=>{
               state.error='';
          })
          .addCase(orderRequestAsync.fulfilled,(state,action)=>{
            const orderGoods=state.orderList.map(item=>{
                const product=action.payload.find(product =>product.id===item.id);
            product.count=item.count;
            return product;
            
            }
            );

            state.error='';
            state.orderGoods=orderGoods;
            state.totalCount='88'
            
            
            /*state.totalCount=orderGoods.reduce(
                (acc,item)=>acc+item.count,
                0,
            );*/
            state.totalPrice=0;
          })
          .addCase(orderRequestAsync.rejected,(state,action)=>{
                state.error=action.payload.error
          })
    }
})

export const {addProduct}=orderSlice.actions;
export default orderSlice.reducer

