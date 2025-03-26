import React, { useState } from 'react';
import Style from './projects.module.css';
import Images from './images/Images';
import Languages from './languages/Languages';

    function Project(props) {

        const [activeImage, setActiveImage] = useState(null);

        const handleImageClick = (index) => setActiveImage(index);
        const handleMouseLeave = () => setActiveImage(null);

        const { title, description, images, languages, link } = props;
        console.log('this is the link - ' + link)
        return (
            <section 
                data-testid="projects"
                id="projects"
                className={Style.projectContainer}
                onMouseLeave={handleMouseLeave}  >
                 
                    <div className={Style.imageContainer}>
                        {images.map((image, index) => {
                            return (
                                <Images 
                                    key={index}
                                    image={image.image}
                                    altTag={image.altTag}
                                    isActive={activeImage === index}
                                    onClick={() => handleImageClick(index)}
                                />
                            )
                        }
                        )}
                    </div>
                
                 
                    <div className={Style.infoContainer}>
                        <h2 className={Style.projectH2}>{title}</h2>
                        <p>{description}</p>
                        <a href={link} target="_blank" className={Style.projectLink} >View project</a>
                        <div className={Style.languageContainer}>
                            {languages.map((language, index) => {
                                return (
                                    <Languages 
                                        key={index}
                                        language={language}
                                    />
                                )           
                            }
                            )}
                        </div>       
                    </div>
                
            </section>
        )
    }
    export default Project;