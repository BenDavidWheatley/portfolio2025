import React from 'react';
import Style from './projects.module.css';
import Languages from './languages/Languages';

    function Project(props) {

        const { title, description, languages, link } = props;
        console.log('this is the link - ' + link)
        return (
            <section 
                data-testid="projects"
                id="projects"
                className={Style.projectContainer}>
              
                 
                  
                        <h2 className={Style.projectH2}>{title}</h2>
                        <p>{description}</p>
                        <div>
                            <a href={link} target="_blank" className={Style.projectLink} rel="noreferrer">View project</a>
                            <a target="_blank" className={Style.projectLink} rel="noreferrer">more info</a>
                        </div>

                        
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
           
                
            </section>
        )
    }
    export default Project;