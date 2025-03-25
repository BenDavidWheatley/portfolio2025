import React from 'react';
import Style from './experience.module.css';


function Experience(props) {
    const { title, company, years, description } = props;
    return (
        <section id='experience' data-testid="experience" className={Style.experienceContainer}>

            {/* Dates container */}  
            <div className={Style.datesContainer}>
                <p>{years}</p>
            </div>

            {/* info container */}  
            <div className={Style.expInfoContainer}>
                <h2>{company}{title}</h2>
                <p>{description}</p>
            </div>

        </section>
    )
}
export default Experience;