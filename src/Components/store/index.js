import { configureStore } from "@reduxjs/toolkit";
import txtReducers from "./text";


//configure store here

const store  = configureStore({
    //states
    reducer:{
        txt:txtReducers
    }
});


export default store;