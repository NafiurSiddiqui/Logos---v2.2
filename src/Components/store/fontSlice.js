import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	// fontFamily: null,
	fontFamily: 'Tangerine',
	fontState: false,
	fontSize: '4rem'
};

const fontSlice = createSlice({
	name: 'font',
	initialState,
	reducers: {
		setFontFamily: (state, action) => {
			state.fontFamily = action.payload;
		},
		setFontState: (state, action) => {
			state.fontState = action.payload;
		},
		setFontSize: (state, action)=>{
			state.fontSize = action.payload;
		 }
	},
});

// export const { setFontFamily, setFontState } = fontSlice.actions;
export const {setFontFamily, setFontState, setFontSize} = fontSlice.actions;
export default fontSlice.reducer;
