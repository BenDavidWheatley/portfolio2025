import React, { useEffect } from 'react';
import Style from './mainfeed.module.css';
import About from './about/About';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import { useDispatch } from 'react-redux';
import { highlightNav } from '../navAside/navigation/scrollSlice'; // New action to highlight nav item

function Mainfeed(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dispatch(highlightNav(entry.target.id));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = [
            document.getElementById('aboutContainer'),
            document.getElementById('projectContainer'),
            document.getElementById('experienceContainer')
        ];

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, [dispatch]);

    const experience = props.experience;
    const projectData = props.projectData;
   
    return (
        <section data-testid="mainfeed" className={Style.mainFeedContainer} >
            <section id='aboutContainer'>
                <About id="about" />
            </section>
            <div className={Style.spacer}></div>
            <section id='projectContainer'>
                {projectData.map((project, index) => (
                    <Projects 
                        id="projects"
                        key={index}
                        {...project}
                    />
                ))}
            </section>
            <div className={Style.spacer}></div>
            <section id='experienceContainer'>
                {experience.map((exp, index) => (
                    <Experience 
                        id="experience" 
                        key={index}
                        {...exp}
                    />
                ))}
            </section>
            <Footer />
        </section>
    );
}

export default Mainfeed;
