import React from 'react';
import Style from './experience.module.css';


function Experience() {
    return (
        <section data-testid="experience" className={Style.experienceContainer}>

            {/* Dates container */}  
            <div className={Style.datesContainer}>
                <p>jan 2023 - Mar 2025</p>
            </div>

            {/* info container */}  
            <div className={Style.expInfoContainer}>
                <h2>Company name - role</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam orci. In finibus nisi in nisl convallis sagittis. Phasellus dictum non libero vitae tincidunt. Integer non nisi tincidunt, scelerisque urna et, finibus orci. Curabitur dignissim orci at ex placerat, vitae placerat odio maximus. In augue mi,</p>
            </div>

        </section>
    )
}
export default Experience;