import React from 'react';
import Icon from '../components/Icon'
import Columns from 'react-bulma-components/lib/components/columns';

const ContactEl = (props) => {


    const { Column } = Columns;
    const { icon, url, blank } = props.contactProps;

    return (
        <Column className="flt-contact-el"
            mobile={{
                size: 3
            }}
            tablet={{
                size: 3
            }}
            desktop={{
                size: 2
            }}
            widescreen={{
                size: 2
            }}
            fullhd={{
                size: 2
            }}>
            <a href={url} target={blank ? "_blank" : null}>
                <Icon iconId={icon} size={72}></Icon>
            </a>
        </Column>
    )
}

export default ContactEl;