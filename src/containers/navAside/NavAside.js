import React from 'react';
import Style from './navAside.module.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import myImage from '../../media/MyProfileImage.png';

function NavAside() {
    return (
        <section data-testid="navaside" className={Style.navAsideContainer} >
            <Header />
            <Navigation />   
            <div className={Style.imageContainer}>
                <img src={myImage} className={Style.myImage} alt="I'm Ben wheatley"/>    
            </div>
            
        </section>
    )
}
export default NavAside;