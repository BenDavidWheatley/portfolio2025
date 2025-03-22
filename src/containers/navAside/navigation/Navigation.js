import React from 'react';
import Styles from './navigation.module.css';

function Navigation() {
    return (
        <section data-testid="navigation" >
            <ul>
                <li><a>About</a></li>
                <li><a>Project</a></li>
                <li><a>Experience</a></li>
            </ul>       
        </section>
    )
}
export default Navigation;