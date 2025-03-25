// This file will hold the redux store

//This will alow us to create out store
import { configureStore } from "@reduxjs/toolkit";
// This is the  reducer that was exported as the default reducer from our slices
import enteredReducer from '../containers/navAside/header/enteredSlice';
import scrollReducer from '../containers/navAside/navigation/scrollSlice';
import cursorReducer from '../containers/cursor/cursorSlice';


//Takes in a object as a argument
export const store = configureStore({
    reducer: {
        enteredReducer: enteredReducer,  
        scroll: scrollReducer,
        cursor: cursorReducer
    }
})

export default store;

// Store will then export to index.js to be passed to the Provider
