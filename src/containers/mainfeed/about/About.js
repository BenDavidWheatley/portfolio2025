import React from 'react';
import Style from './about.module.css';

function About() {
    return (
        <section data-testid="about" className={Style.aboutContainer} >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam orci. In finibus nisi in nisl convallis sagittis. Phasellus dictum non libero vitae tincidunt. Integer non nisi tincidunt, scelerisque urna et, finibus orci. Curabitur dignissim orci at ex placerat, vitae placerat odio maximus. In augue mi, mollis at malesuada vitae, porta vitae felis. Etiam nunc eros, blandit id tempor at, auctor vel orci. Curabitur posuere bibendum enim vitae iaculis. Duis a arcu eleifend, iaculis quam ac, semper urna. Nulla venenatis ipsum ut diam facilisis, non efficitur magna egestas. Sed aliquam efficitur arcu, vitae sagittis arcu volutpat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam orci. In finibus nisi in nisl convallis sagittis. Phasellus dictum non libero vitae tincidunt. Integer non nisi tincidunt, scelerisque urna et, finibus orci. Curabitur dignissim orci at ex</p>
        </section>
    )
}
export default About;