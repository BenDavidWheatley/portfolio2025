import React from 'react';
import Style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { enterSite } from './enteredSlice';

function Header() {
    const entered = useSelector(state => state.enteredReducer.value); 
    const dispatch = useDispatch();

    return (
        <section className={Style.headerSection}
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
