import React from 'react';
import Styles from './footer.module.css';

function Footer() {
    return (
        <section data-testid="footer" className={Styles.footer}>
                <p>Designed in Figma - built in react ©2025</p>
        </section>
    )
}
export default Footer;