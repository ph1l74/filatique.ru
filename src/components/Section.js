import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';


const Section = (props) => {
    return (
        <Hero size="fullheight" id={props.id} {...props}>
            <Hero.Body>
                {props.children}
            </Hero.Body>
        </Hero>
    );
}

export default Section;
