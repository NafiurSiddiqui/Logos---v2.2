import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontFamily: null,
		
		fontState: false,
		
}

const fontSlice = createSlice({
    name: 'font',
    initialState,
    reducers:{
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload
        },
        setFontState: (state, action) => {
            state.fontState = action.payload
        }
    }
})

export const {setFontFamily, setFontState } = fontSlice.actions;
export default fontSlice;