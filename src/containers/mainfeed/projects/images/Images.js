import React from 'react';
import Style from './images.module.css';

function Images() {
    return (
        <section data-testid="images" className={Style.imageContainer} >
            <p>This will be an image</p>
        </section>
    )
}
export default Images;