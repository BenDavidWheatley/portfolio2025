import React from 'react';
import Style from './about.module.css';
import gitHubLogo from '../../../media/github-mark-white.svg';
import linkedInLogo from '../../../media/linkedIn.png';
import Languages from '../projects/languages/Languages';
import {myLanguages} from '../../app/experienceData';



function About() {
    return (
        <section id='about' data-testid="about" className={Style.aboutContainer} >
            <p>Hi, I'm Ben, a freelance web developer with a wide range of front- and back-end skills gained over the last few years. 
            I live in Oxford, with my wife and kids.</p>
            <p>I first got into coding during the 2020 lockdown and I have loved every minute of learning as many principles, 
            languages and frameworks as possible. I am a mid-life career changer with a background in carpentry and construction 
            site management. It may seem a strange career shift, but I believe that being on site and working to tight deadlines 
            has given me resilience and many cross-functional skills, including problem solving, critical thinking, and 
            communication.</p>
            <p>I am passionate about building efficient, accessible websites and applications that delight users while 
            delivering strong performance and functionality.</p>
            <p>This website is a personal portfolio showcasing my skills and projects. It is built using React, Redux, and styled-components, with a focus on modern design and user experience. 
            The site features a homepage with an animated hero section, an about section with information about me and my skills, 
            a projects section with detailed descriptions and images, and a contact form for potential clients. The design is clean and minimalistic, with a dark theme and bold typography. Key features include a responsive layout, smooth animations, and interactive elements like hover effects and scroll animations.</p>
            <p>Please browse this website to explore my recent work and experience. If you'd like to find out more 
            about working with me, contact me at <a className={Style.emailMe} rel="noreferrer" href="mailto:info@wheatleystudios.com?subject=Project%20Enquiry&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20new%20project..." 
   target="_blank">info@wheatleystudios.com</a>
</p>
            
        <div className={Style.logoContainer}>
            <a href='https://github.com/BenDavidWheatley' target='_blank' rel='noreferrer'>
                <img src={gitHubLogo} alt='mac one' />
            </a>
            <a href='https://www.linkedin.com/in/ben-wheatley-ba6248143/' target='_blank' rel='noreferrer'>
                <img src={linkedInLogo} alt='github logo' />
            </a>
        </div>  
        <div className={Style.languageContainer}>
            {myLanguages.map((language, index) => {
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
export default About;