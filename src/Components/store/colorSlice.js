import { createSlice } from "@reduxjs/toolkit";

// const defaultColor = '#20f020';

const colorSlice = createSlice({
    name: 'color',
    initialState:{

        colorActive: '#20f020',
        colorNavActive: false
    },
    reducers:{
        setColorActive: (state, action) => {
            state.colorActive = action.payload;
        },
        setColorNav: (state, action)=>{
            state.colorNavActive = action.payload
         }
    }
		
})

export const { setColorActive } = colorSlice.actions;

export default colorSlice.reducer;