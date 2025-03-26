import React, { useEffect } from 'react';
import Style from './navigation.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { smoothScroll, highlightNav } from './scrollSlice';

function Navigation() {
    const dispatch = useDispatch();
    const activeSection = useSelector(state => state.scroll.activeSection);
    const entered = useSelector(state => state.enteredReducer.value); // Track "enter" state

    // Scroll listener for section highlighting
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['aboutContainer', 'projectContainer', 'experienceContainer'];

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const rect = section.getBoundingClientRect();
                const isHalfway = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

                if (isHalfway) {
                    dispatch(highlightNav(sectionId));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Trigger scroll check on load
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    // Smooth scrolling logic
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                dispatch(smoothScroll(targetId)); 
            });
        });

        return () => {
            links.forEach(link => link.removeEventListener('click', () => {}));
        };
    }, [dispatch]);

    return (
        <section 
            data-testid="navigation" 
            className={
                entered 
                ? Style.navigationContainer 
                : `${Style.navigationContainer} ${Style.noDisplay}`
            }
        >
            <ul>
                <li className={`clickable ${activeSection === 'aboutContainer' ? Style.active : Style.inactive}`}>
                    <a href="#about">About</a>
                </li>
                <li className={`clickable ${activeSection === 'projectContainer' ? Style.active : Style.inactive}`}>
                    <a href="#projects">Projects</a>
                </li>
                <li className={`clickable ${activeSection === 'experienceContainer' ? Style.active : Style.inactive}`}>
                    <a href="#experience">Experience</a>
                </li>
            </ul>
        </section>
    );
}

export default Navigation;
