// features/scrollSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    targetId: null,         // Store the target section ID for smooth scrolling
    activeSection: null     // Track the active section for navigation highlight
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setTargetId: (state, action) => {
            state.targetId = action.payload;
        },
        clearTargetId: (state) => {
            state.targetId = null;
        },
        highlightNav: (state, action) => {
            state.activeSection = action.payload; // Track the active section
        }
    }
});

// Export actions
export const { setTargetId, clearTargetId, highlightNav } = scrollSlice.actions;

// Thunk to handle smooth scrolling
export const smoothScroll = (targetId) => (dispatch) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        dispatch(highlightNav(targetId + 'Container')); // Highlight the section immediately
        dispatch(setTargetId(targetId)); // Store targetId in Redux for reference

        const startPosition = window.scrollY;

        // Add offset for the "About" section
        const offset = targetId === 'about' ? 200 : 0;
        const targetPosition = targetElement.offsetTop - offset;

        const distance = targetPosition - startPosition;
        const duration = 2500;
        let startTime = null;

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const scrollAmount = startPosition + distance * easeInOutQuad(progress);

            window.scrollTo(0, scrollAmount);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }
};


// Export reducer
export default scrollSlice.reducer;
