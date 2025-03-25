    import React from 'react';
    import Style from './projects.module.css';
    import Images from './images/Images';
    import Languages from './languages/Languages';

    function Project(props) {
        const { title, description, images, languages } = props;
        return (
            <section 
                data-testid="projects"
                id="projects"
                className={Style.projectContainer}>
                    {/* Image container */}
                    <div className={Style.imageContainer}>
                        {images.map((image, index) => {
                            return (
                                <Images 
                                    key={index}
                                    image={image.image}
                                    altTag={image.altTag}
                                />
                            )
                        }
                        )}
                    </div>
                
                    {/* Information container */}
                    <div className={Style.infoContainer}>
                        <h2 className={Style.projectH2}>{title}</h2>
                        <p>{description}</p>
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