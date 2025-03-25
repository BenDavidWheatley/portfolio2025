import React from 'react';
import Style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { enterSite } from './enteredSlice';

function Header() {
    const entered = useSelector(state => state.enteredReducer.value); 
    const dispatch = useDispatch();

    console.log(entered + ' from header');
    return (
        <section 
            className={entered ? '': Style.headerSection} 
            data-testid="header"
        >
            <div className={`${entered? Style.backgroundFade : Style.background}` }></div> 
                <div className={Style.headerDiv}>
                    <h1 className={entered? Style.mainHeaderAnimation : Style.mainHeader}>Ben Wheatley</h1>
                    <h2 className={entered? Style.subheaderAnimation : Style.subheader}>Full Stack Developer</h2>
                </div>
                
                <h3 className={entered ? Style.mainHeaderThree : Style.noDisplay}>Oxford Based</h3>
                <button
                    className={`${'clickable'} ${entered ? Style.noDisplay : Style.enterSite}`} 
                    onClick={() => dispatch(enterSite())}
                >Enter</button>           
        </section>
    );
}

export default Header;
/*
import React, { useState } from 'react';
import Style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const entered = useSelector(state => state.enteredReducer.value); 
    const dispatch = useDispatch();

    
    console.log(entered);
    const [isEntered, setIsEntered] = useState(false);

    const handleEnterClick = () => {
        setIsEntered(true);
    };

    return (
        <section 
            className={isEntered ? '': Style.headerSection} 
            data-testid="header"
        >
            <div className={`${isEntered? Style.backgroundFade : Style.background}` }></div> 
                <div className={Style.headerDiv}>
                    <h1 className={isEntered? Style.mainHeaderAnimation : Style.mainHeader}>Ben Wheatley</h1>
                    <h2 className={isEntered? Style.subheaderAnimation : Style.subheader}>Full Stack Developer</h2>
                </div>
                
                <h3 className={isEntered ? Style.mainHeaderThree : Style.noDisplay}>Oxford Based</h3>
                <button
                    className={`${'clickable'} ${isEntered ? Style.noDisplay : Style.enterSite}`} 
                    onClick={handleEnterClick}
                >Enter</button>           
        </section>
    );
}

export default Header;*/