import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';

const PressEl = (props) => {

    const { Column } = Columns;
    const { source, url, title } = props.pressProps;

    return (
        <Column className="flt-press-el" renderAs="a" href={url} target="_blank"
            mobile={{
                size: 12
            }}
            tablet={{
                size: 12
            }}
            desktop={{
                size: 12
            }}
            widescreen={{
                size: 12
            }}
            fullhd={{
                size: 12
            }}>
            {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
                <div className="flt-press-el-source">{source}</div>
                <div className="flt-press-el-title">{title}</div>
            {/* </a> */}
        </Column>
    )
}

export default PressEl;