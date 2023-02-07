import { configureStore } from "@reduxjs/toolkit"
import product from "./reducers/allProdactReducer";
import selectProduct from "./reducers/selectProdact";
import { removeProduct } from "./reducers/allProdactReducer";
const store =configureStore({
    reducer:{
        product,
        selectProduct,
        removeProduct
    }
})
export default store