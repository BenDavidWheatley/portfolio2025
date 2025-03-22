import React from 'react';
import Style from './navigation.module.css';

function Navigation() {
    return (
        <section data-testid="navigation" className={Style.navigationContainer}>
            <ul>
                <li><a>About</a></li>
                <li><a>Project</a></li>
                <li><a>Experience</a></li>
            </ul>       
        </section>
    )
}
export default Navigation;