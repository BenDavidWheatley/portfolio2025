import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition, setHovering } from './cursorSlice';
import Style from './cursor.module.css';

function Cursor() {
    const dispatch = useDispatch();
    const { position, isHovering } = useSelector((state) => state.cursor);
    const trailRef = useRef([]);

    useEffect(() => {
        const isDesktop = window.innerWidth > 768;

        if (!isDesktop) return;

        const moveCursor = (e) => {
            dispatch(setPosition({ x: e.clientX, y: e.clientY }));

            const target = e.target.closest('.clickable, button, a');
            dispatch(setHovering(!!target));

            createTrail(e.clientX, e.clientY);
        };

        const createTrail = (x, y) => {
            const trailElement = document.createElement('div');
            trailElement.className = Style.trailBlaze;
            trailElement.style.left = `${x}px`;
            trailElement.style.top = `${y}px`;

            document.body.appendChild(trailElement);

            setTimeout(() => {
                trailElement.remove();
            }, 500); // Duration for the trail to fade out
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [dispatch]);

    if (window.innerWidth <= 768) return null; // Prevents rendering on mobile

    return (
        <div
            className={`${Style.cursor} ${isHovering ? Style.cursorHover : ''}`}
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
    );
}

export default Cursor;
