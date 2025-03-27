import React from 'react';
import Style from './footer.module.css';
import { useSelector } from 'react-redux';

function Footer() {

    const entered = useSelector(state => state.enteredReducer.value); 

    return (
        <section data-testid="footer" className={entered? Style.footer : Style.noDisplay}>
             <p>V1.0: Designed in Figma - Built with React ©2025</p> 
        </section>
    )
}
export default Footer;