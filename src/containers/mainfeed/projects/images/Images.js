import React from 'react';
import Style from './images.module.css';

function Images(props) {
    const { image } = props;
    const { altTag } = props;
    return (
        <section data-testid="images" className={Style.imageContainer} >
            <img src={image} alt={altTag} className={Style.image} />
        </section>
    )
}
export default Images;