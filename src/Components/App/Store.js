import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice";

const Store = configureStore({
    reducer:{
        cart : CartSlice
    }
})

export default Store;