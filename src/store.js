import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shoppingSlice"
const store = configureStore({
    reducer:{
        shop:shoppingSlice.reducer
    }
});
export default store;