import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Hero from 'react-bulma-components/lib/components/hero';


const Footer = (props) => {

    const { Column } = Columns;

    return (
        <Hero {...props}>
            <Hero.Body>
                <Columns>
                    <Column
                        size="half"
                        offset="one-quarter"
                        className="centered"
                        style={{textAlign: 'center'}}
                        mobile={{
                            size: 10,
                            offset: 1
                        }}
                        tablet={{
                            size: 8,
                            offset: 2
                        }}
                        desktop={{
                            size: 8,
                            offset: 2
                        }}
                        widescreen={{
                            size: 8,
                            offset: 2
                        }}
                        fullhd={{
                            size: 8,
                            offset: 2
                        }}>
                            <a href="https://ph1l74.com" target="_blank" rel="noopener noreferrer">Filat Astakhov</a> © 2020
                    </Column>
                </Columns>
            </Hero.Body>
        </Hero>
    );
}

export default Footer;
