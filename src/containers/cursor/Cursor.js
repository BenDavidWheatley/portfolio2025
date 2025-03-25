import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition, setHovering } from './cursorSlice';
import Style from './cursor.module.css';

function Cursor() {
    const dispatch = useDispatch();
    const { position, isHovering } = useSelector((state) => state.cursor);

    useEffect(() => {
        const moveCursor = (e) => {
            dispatch(setPosition({ x: e.clientX, y: e.clientY }));

            const target = e.target.closest('.clickable, button, a');

            if (target) {
                dispatch(setHovering(true));
            } else {
                dispatch(setHovering(false));
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [dispatch]);

    return (
        <div
            className={`${Style.cursor} ${isHovering ? Style.cursorHover : ''}`}
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
    );
}

export default Cursor;
