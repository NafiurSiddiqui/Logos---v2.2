import { createSlice } from '@reduxjs/toolkit';

const dimensionSlice = createSlice({
	name: 'dimension',
	initialState: {
		width: '',
		height: '',
	},
	reducers: {
		setWidth: (state, action) => {
            state.width = action.payload 
        },
		setHeight: (state, action) => {
            state.height = action.payload
        },
	},
});

export const {setWidth, setHeight} = dimensionSlice.actions;

export default dimensionSlice.reducer;
