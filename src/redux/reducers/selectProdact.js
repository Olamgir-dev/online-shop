import { createSlice } from "@reduxjs/toolkit";
const selectProdactSlice = createSlice({
    name: "selectProduct",
    initialState: {obj:{}},
    reducers: {
        setSelectorProdact: (state,actions) => {
            state.obj=actions.payload
        },
        removeProduct:(state,actions)  => {
             state.obj={}
        }
    }
})
export const { setSelectorProdact,removeProduct } = selectProdactSlice.actions;
export default selectProdactSlice.reducer;