import React, { useEffect } from 'react';
import Style from './navigation.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { smoothScroll } from './scrollSlice';

function Navigation() {
    const dispatch = useDispatch();

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

    const entered = useSelector(state => state.enteredReducer.value);
    console.log(entered + ' from navigation');
    
    return (
        <section data-testid="navigation" className={entered? Style.navigationContainer : Style.noDisplay}>
            <ul>
                <li className='clickable'><a href="#about">About</a></li>
                <li className='clickable'><a href="#projects">Projects</a></li>
                <li className='clickable'><a href="#experience">Experience</a></li>
            </ul>

        </section>
    );
}
export default Navigation;
