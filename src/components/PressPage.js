import React from 'react';
import ReactWOW from 'react-wow';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import PressEl from 'components/PressEl';
import { press } from '../constants';

const Press = () => {

    const { Column } = Columns;

    return (
        <Columns>
            {press.map((p, i) => {
                return (
                    <ReactWOW delay={`${(Math.random() * 2).toFixed(2)}s`} animation="fadeIn" duration="0.75s" key={'press_wow_' + i}>
                        <Column size="half" offset="one-quarter" key={'press_' + i} className="flt-press-type"
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
                            <Heading>{p.title}</Heading>
                            <Columns className="fullwidth centered">
                                {p.articles.map((a, i) => (
                                    <PressEl key={'article_' + i} pressProps={a} />
                                ))}
                            </Columns>
                        </Column>
                    </ReactWOW>
                )
            })}

        </Columns>
    )
}

export default Press;