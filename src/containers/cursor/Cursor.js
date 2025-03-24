import React, { useEffect, useState } from 'react';
import Style from './cursor.module.css';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            

            // Improved clickable detection
            const target = e.target.closest('.clickable, button, a');


            if (target) {
                console.log('Hovering over clickable element');
                setIsHovering(true);
            } else {
                console.log('Not hovering over clickable element');
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div
            className={`${Style.cursor} ${isHovering ? Style.cursorHover : ''}`}
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
    );
}

export default Cursor;
