import React from 'react';
import Style from './mainfeed.module.css';
import About from './about/About';
import Projects from './projects/Projects';
import Experience from './experience/Experience'

function Mainfeed(props) {

    const experience = props.experience;
    const projectData = props.projectData;
    console.log(experience);
   
    return (
        <section data-testid="mainfeed" className={Style.mainFeedContainer} >
            <About />
            <div className={Style.spacer}></div> {/*This div is there to create a spacer */}
            {projectData.map((project, index) => {
                return (
                    <Projects 
                        key={index}
                        title={project.title}
                        description={project.description}
                        images={project.images}
                        languages={project.languages}
                    />
                )
            }
            )}
            <div className={Style.spacer}></div> {/*This div is there to create a spacer */}
            {experience.map((exp, index) => {
                return (
                    <Experience 
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        years={exp.years}
                        description={exp.description}
                    />
                )
            }
            )}
            
        </section>
    )
}
export default Mainfeed;