import React from 'react';
import Style from './navAside.module.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';

function NavAside() {
    return (
        <section data-testid="navaside" className={Style.navAsideContainer} >
            <Header />
            <Navigation />
         {/*   <Footer className={Style.footerContainer}/>*/}
        </section>
    )
}
export default NavAside;