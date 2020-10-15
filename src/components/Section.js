import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';


const Section = (props) => {
    return (
        <Hero size="fullheight" id={props.id} {...props}>
            {
                props.imgSrc ?
                    <div className="flt-bg-img" style={{ backgroundImage: `url(${props.imgSrc})` }} />
                    :
                    null
            }
            <div className="flt-section-title">{props.title}</div>
            <Hero.Body>
                {props.children}
            </Hero.Body>
        </Hero>
    );
}

export default Section;
