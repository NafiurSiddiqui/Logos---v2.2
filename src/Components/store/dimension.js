import { createSlice } from '@reduxjs/toolkit';

const dimensionSlice = createSlice({
	name: 'dimension',
	initialState: {
		width: 0,
		height: 0,
	},
	reducers: {
		setWidth: (state, action) => {
            state.width = action.payload * 2
        },
		setHeight: (state, action) => {
            state.height = action.payload
        },
	},
});

export const {setWidth, setHeight} = dimensionSlice.actions;

export default dimensionSlice.reducer;
