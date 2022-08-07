import { configureStore } from "@reduxjs/toolkit";
import fontSliceReducer from "./fontSlice";

import txtSliceReducer from './textSlice';


//configure store here

export const store  = configureStore({
    //states
    reducer:{
        txt:txtSliceReducer,
        font:fontSliceReducer
    }
});




