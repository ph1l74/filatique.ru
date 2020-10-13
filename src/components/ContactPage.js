import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import ContactEl from '../components/ContactEl';
import { socials } from '../constants';

const Contact = () => {

    const { Column } = Columns;

    return (
        <Columns className="fullwidth">
            <Column centered
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
                <Columns centered className="hard-flex">

                    {Object.keys(socials).map((k, i) => (
                        <ContactEl contactProps={socials[k]} key={i} />
                    ))}

                </Columns>
            </Column>
        </Columns>
    )
}

export default Contact;