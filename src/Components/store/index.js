import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './colorSlice';
import dimensionReducer from "./dimension";
import fontSliceReducer from "./fontSlice";
import txtSliceReducer from './textSlice';


//configure store here

export const store  = configureStore({
    //states
    reducer:{
        txt:txtSliceReducer,
        font:fontSliceReducer,
        color: colorReducer,
        dimension:dimensionReducer
    }
});




