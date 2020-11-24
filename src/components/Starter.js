import React, { useState } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';
import Heading from 'react-bulma-components/lib/components/heading';
import { releasers } from '../constants';
import Icon from './Icon';


const Starter = () => {

    const { Column } = Columns;

    const [links] = useState([
        {
            releaser: releasers.appleMusic,
            url: 'https://music.apple.com/ru/album/autumn-flower/1541317438'
        },
        {
            releaser: releasers.spotify,
            url: 'https://open.spotify.com/album/41XMkhYKTnSERIPrJ9iPKU'
        },
        {
            releaser: releasers.youtube,
            url: 'https://www.youtube.com/watch?v=AkA2eZYC7UI&list=OLAK5uy_mSkOyMx1jmCPnlzoqFPdxgZ2jLVVuBj8Y'
        }
    ])

    return (
        <Columns className="fullwidth centered">
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
                    
                    <Column size={6}
                        mobile={{
                            size: 10,
                            offset: 1
                        }}
                        tablet={{
                            size: 8,
                            offset: 2
                        }}
                        desktop={{
                            size: 5,
                            offset: 2
                        }}
                        widescreen={{
                            size: 4,
                            offset: 2
                        }}
                        fullhd={{
                            size: 4,
                            offset: 2
                        }}>
                        <Image size="1by1" src={'/img/album4.jpg'} className="starter-cover" />
                    </Column>
                    <Column size={4} style={{ alignSelf: 'center' }} offset={0}
                        mobile={{
                            size: 10,
                            offset: 1
                        }}
                        tablet={{
                            size: 8,
                            offset: 2
                        }}
                        desktop={{
                            size: 3,
                            offset: 1
                        }}
                        widescreen={{
                            size: 3,
                            offset: 1
                        }}
                        fullhd={{
                            size: 3,
                            offset: 1
                        }}>
                        {links.map((l, i) => {
                            return (
                                <a className="starter-release" href={l.url} target="_blank" rel="noopener noreferrer" key={i}>
                                    <div className="starter-release-item">
                                        <Icon size={20} iconid={l.releaser.icon}></Icon> <div className="starter-releaser-title">{l.releaser.label}</div>
                                    </div>
                                </a>
                            )
                        })}
                    </Column>
                </Columns>
            </Column>
        </Columns>
    )
}

export default Starter;