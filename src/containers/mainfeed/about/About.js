import React from 'react';
import Style from './about.module.css';
import gitHubLogo from '../../../media/github-mark-white.svg';
import linkedInLogo from '../../../media/linkedIn.png';


function About() {
    return (
        <section id='about' data-testid="about" className={Style.aboutContainer} >
            <p>A career changer with a background in construction management who left the industry in July 2024 to pursue a career in web development. Currently coming to the end of a full-stack development refresher course through IT-Career-Switch. I have gained extensive experience across front-end and back-end technologies. My skill set includes HTML, CSS, JavaScript, PHP, SQL, Python, C#, jQuery, and Java, alongside experience with frameworks like Vue, React, and Bootstrap. I also have knowledge of Swagger for API documentation. Drawing from my experience as a Site Manager, I bring strong project management, problem-solving, and communication skills to technical roles. I am passionate about building efficient, accessible websites and applications that meet user needs while delivering strong performance and functionality.</p>
            <p>If you have a project in mind that you would like help with just drop me an email - </p>
            <a className={Style.emailMe} rel="noreferrer" href="mailto:info@wheatleystudios.com?subject=Project%20Inquiry&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20new%20project..." 
   target="_blank">info@wheatleystudios.com</a>
        <div className={Style.logoContainer}>
            <a href='https://github.com/BenDavidWheatley' target='_blank' rel='noreferrer'>
                <img src={gitHubLogo} alt='mac one' />
            </a>
            <a href='https://www.linkedin.com/in/ben-wheatley-ba6248143/' target='_blank' rel='noreferrer'>
                <img src={linkedInLogo} alt='github logo' />
            </a>
        </div>  

        </section>
    )
}
export default About;