import { createSlice,configureStore } from "@reduxjs/toolkit";

let initialState = {
    cartCount :0,
    cartData : []
}
let useSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        updateCart:(state,action) => {
            state.cartCount +=action.payload
        },
        updateCartData:(state,action)=>{
          
            state.cartData.push(action.payload) 
        },
        deleteCartData:(state,action)=>{
          
            state.cartData.pop(action.payload) 
        },
    }
})
console.log(useSlice)
export let {updateCart,updateCartData,deleteCartData} = useSlice.actions
console.log(useSlice)

export let store = configureStore({
    reducer:{
        user:useSlice.reducer
    }
})