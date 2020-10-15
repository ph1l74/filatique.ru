import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import ReactWOW from 'react-wow';

const Section = (props) => {
    return (
        <Hero size="fullheight" id={props.id} {...props}>
            {
                props.imgSrc ?
                    <div className="flt-bg-img" style={{ backgroundImage: `url(${props.imgSrc})` }} />
                    :
                    null
            }
            <ReactWOW delay={`1s`} animation="fadeInLeft" duration="0.5s">
                <div className="flt-section-title">
                    {props.title}
                </div>
            </ReactWOW>
            <Hero.Body>
                {props.children}
            </Hero.Body>
        </Hero>
    );
}

export default Section;
