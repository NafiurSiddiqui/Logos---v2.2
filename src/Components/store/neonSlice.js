import { createSlice } from "@reduxjs/toolkit";

const neonSlice = createSlice({
    name:'neonSwitch',
    initialState:{
        neonState:true
    },
    reducers:{

        setNeonState:(state)=>{
            state.neonState = !state.neonState;
        }
    }
})

export const {setNeonState} = neonSlice.actions;
export default neonSlice;