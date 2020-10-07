import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Release from 'components/Release';
import { releases } from '../constants';

const Listen = () => {

    const { Column } = Columns;

    return (
        <Columns className="fullwidth">
            <Column size="half" offset="one-quarter"
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
                <Columns className="fullwidth">
                    {releases.map((release, i) => (
                        <Release key={i} releaseInfo={release}></Release>
                    ))}
                </Columns>
            </Column>
        </Columns>
    )
}

export default Listen;