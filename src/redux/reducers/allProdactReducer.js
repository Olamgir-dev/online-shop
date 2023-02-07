import { createSlice } from "@reduxjs/toolkit"


const productSlice=createSlice({
  name: 'products',
  initialState:{array:[]},
  reducers:{
    setProducts:(state,action)=>{
        state.array = action.payload
    },
    removeProduct:(state,action)=>{
      state.array={}
    } 
  }
})

export const {setProducts , removeProduct}=productSlice.actions
export default productSlice.reducer;