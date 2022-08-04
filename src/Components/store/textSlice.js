import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	uTxt: null,
	storageText: '',
	storageStatus: null,
	delTxtState: false,
	txtState: false,
	isTouched:false
};

const txtSlice = createSlice({
	name: 'txt',
	initialState,
	reducers: {
		setUtxt: (state, action) => {
			state.uTxt = action.payload;
           
		},
		setStorageText: (state, action) => {
			state.storageText = action.payload;
		},
		setStorageStatus: (state,action) => {
			state.storageStatus = action.payload;
		},
		setDelTxtState: (state,action) => {
			state.delTxtState = action.payload;
		},
		setTxtState: (state,action) => {
			state.txtState = action.payload;
		},
		setIsTouched: (state, action)=>{
			state.isTouched = action.payload
		 }
	},
    
});




export const txtActions = txtSlice.actions;

export default txtSlice.reducer;