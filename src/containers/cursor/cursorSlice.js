import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    position: { x: 0, y: 0 },
    isHovering: false
};

const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setHovering: (state, action) => {
            state.isHovering = action.payload;
        }
    }
});

export const { setPosition, setHovering } = cursorSlice.actions;
export default cursorSlice.reducer;
