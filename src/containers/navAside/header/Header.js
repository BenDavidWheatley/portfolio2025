import React, { useState } from 'react';
import Style from './header.module.css';

function Header() {
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
                <p 
                    className={`${'clickable'} ${isEntered ? Style.noDisplay : Style.enterSite}`} 
                    onClick={handleEnterClick}
                >
                    &lt;Enter /&gt;
                </p>           
        </section>
    );
}

export default Header;