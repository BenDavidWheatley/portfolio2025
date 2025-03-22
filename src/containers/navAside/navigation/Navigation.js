import React, { useEffect } from 'react';
import Style from './navigation.module.css';

function Navigation() {
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
    
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
    
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    const startPosition = window.scrollY;
                    const targetPosition = targetElement.offsetTop;
                    const distance = targetPosition - startPosition;
                    const duration = 2500; // Adjust duration for slower speed
                    let startTime = null;
    
                    function easeInOutQuad(t) {
                        return t < 0.5
                            ? 2 * t * t
                            : -1 + (4 - 2 * t) * t;
                    }
    
                    function animation(currentTime) {
                        if (!startTime) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1); // Ensures progress stops at 1
                        const scrollAmount = startPosition + distance * easeInOutQuad(progress);
    
                        window.scrollTo(0, scrollAmount);
    
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        }
                    }
    
                    requestAnimationFrame(animation);
                }
            });
        });
    }, []);
    
    
    return (
        <section data-testid="navigation" className={Style.navigationContainer}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
        </section>
    );
}
export default Navigation;