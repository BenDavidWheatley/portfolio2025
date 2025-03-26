import React from 'react';
import Style from './navAside.module.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

function NavAside() {
    return (
        <section data-testid="navaside" className={Style.navAsideContainer} >
            <Header />
            <Navigation />   
        </section>
    )
}
export default NavAside;