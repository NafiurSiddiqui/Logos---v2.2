import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './colorSlice';
import debounceSlice from "./debounceSlice";
import dimensionReducer from "./dimension";
import fontSliceReducer from "./fontSlice";
import neonSlice from "./neonSlice";
import smallDeviceSlice from "./smallDevice-slice";

import txtSliceReducer from './textSlice';
//configure store here

export const store  = configureStore({
    //states
    reducer:{
        txt:txtSliceReducer,
        font:fontSliceReducer,
        color: colorReducer,
        dimension:dimensionReducer,
        debouncer: debounceSlice.reducer,
        neonSwitch: neonSlice.reducer,
        smallDevice:smallDeviceSlice.reducer
    }
});




