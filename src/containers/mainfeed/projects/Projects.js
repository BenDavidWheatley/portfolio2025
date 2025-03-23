    import React, { useState } from 'react';
    import Style from './projects.module.css';
    import Images from './images/Images';
    import Languages from './languages/Languages';

    function Project() {
      
        return (
            <section 
                data-testid="projects"
                id="projects"
                className={Style.projectContainer}>
                    {/* Image container */}
                    <div className={Style.imageContainer}>
                        <Images />
                        <Images />
                    </div>
                
                    {/* Information container */}
                    <div className={Style.infoContainer}>
                        <h2 className={Style.projectH2}>PROJECT TITLE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam orci. In finibus nisi in nisl convallis sagittis. Phasellus dictum non libero vitae tincidunt. Integer non nisi tincidunt, scelerisque urna et, finibus orci. Curabitur dignissim orci at ex placerat, vitae placerat odio maximus. In augue mi, mollis at malesuada vitae, porta vitae felis. Etiam nunc eros, blandit id tempor at, auctor vel orci. Curabitur posuere bibendum enim </p>
                        <div className={Style.languageContainer}>
                            <Languages ClassName={Style.languages} />
                            <Languages ClassName={Style.languages} />
                            <Languages ClassName={Style.languages} />
                        </div>       
                    </div>
                
            </section>
        )
    }
    export default Project;