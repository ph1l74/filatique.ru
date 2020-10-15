import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import ReactWOW from 'react-wow';
import Icon from '../components/Icon'

const ContactEl = (props) => {


    const { Column } = Columns;
    const { icon, url, blank } = props.contactProps;

    return (
        <ReactWOW delay={`${(Math.random() * 2).toFixed(2)}s`} animation="fadeIn" duration="0.75s">
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
                    <Icon iconid={icon} size={64}></Icon>
                </a>
            </Column>
        </ReactWOW>
    )
}

export default ContactEl;