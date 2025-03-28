import React from 'react';
import { useSelector } from 'react-redux';
import Style from './navAside.module.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import myImage from '../../media/MyProfileImage.png';

function NavAside() {
    const entered = useSelector(state => state.enteredReducer.value);   
    return (
        <section data-testid="navaside" className={Style.navAsideContainer} >
            <Header />
            <Navigation />   
            <div className={entered? Style.imageContainer : Style.noDisplay}>
                <img src={myImage} className={Style.myImage} alt="I'm Ben wheatley"/>    
            </div>
            
        </section>
    )
}
export default NavAside;