import React from 'react';
import Style from './languages.module.css';

function Languages(props) {
    return (
        <section data-testid="languages" className={`${props.isHovered? Style.hovered : Style.NotHovered} ${Style.languageContainer}`} >
                <p>Javascript</p>
        </section>
    )
}
export default Languages;