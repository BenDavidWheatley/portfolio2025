import React from 'react';
import Style from './languages.module.css';

function Languages(props) {
    const language = props.language;
    return (
        <section data-testid="languages" className={Style.languageContainer} >
                <p>{language}</p>
        </section>
    )
}
export default Languages;