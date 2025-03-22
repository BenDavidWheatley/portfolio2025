import React from 'react';
import Style from './mainfeed.module.css';
import About from './about/About';
import Projects from './projects/Projects';
import Experience from './experience/Experience'

function Mainfeed() {
   
    return (
        <section data-testid="mainfeed" className={Style.mainFeedContainer} >
            <About />
            <Projects />
            <Projects />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
        </section>
    )
}
export default Mainfeed;