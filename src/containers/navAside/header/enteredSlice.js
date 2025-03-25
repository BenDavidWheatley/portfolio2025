import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {    
    value: false,
    };

const enteredSlice = createSlice({
    name: 'entered',
    initialState,
    reducers: {
        enterSite: state => {
            state.value = true;
        },
    },
});

export const { enterSite } = enteredSlice.actions;
export default enteredSlice.reducer;