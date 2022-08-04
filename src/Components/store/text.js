import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	uTxt: '',
	storageText: '',
	storageStatus: null,
	delTxtState: false,
	txtState: false,
};

const txtSlice = createSlice({
	name: 'textState',
	initialState: initialState,
	reducers: {
		setUTxt: (state, action) => {
			state.uTxt = action.payload;
           
		},
		setStorageText: (state, action) => {},
		setStorageStatus: () => {},
		setDelTxtState: () => {},
		setTxtState: () => {},
	},
    
});


export const txtActions = txtSlice.actions;
export default txtSlice.reducer;
