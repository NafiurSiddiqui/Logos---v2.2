import { createSlice } from "@reduxjs/toolkit";


const smallDeviceSlice = createSlice({
    name:'smallDevice',
    initialState: {
        smallDeviceActive: null
    },
    reducers:{
        getDeviceWidth: (state, action)=>{
            state.smallDeviceActive = action.payload
         }
    }
})


export const {getDeviceWidth} =  smallDeviceSlice.actions;
export default smallDeviceSlice;

