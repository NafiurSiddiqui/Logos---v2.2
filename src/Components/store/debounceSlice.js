import { createSlice } from '@reduxjs/toolkit';


const debounceSlice = createSlice({
        name: 'debouncer',
        initialState:{
            debounceStat: false,
        },
		reducers:{
            setDebounceState: (state, action ) => {
                state.debounceStat = action.payload;

            }
        }
    });

    
    

    export const {setDebounceState} = debounceSlice.actions;

    export default debounceSlice;